import { toc } from 'mdast-util-toc';
import { remark } from 'remark';
import type { Node } from 'unist';
import { visit } from 'unist-util-visit';

const textTypes = ['text', 'emphasis', 'strong', 'inlineCode'];

function flattenNode(node: Node) {
  const p: string[] = [];
  visit(node, (n) => {
    if (!('type' in n)) return;
    if (!textTypes.includes(n.type as string)) return;
    if ('value' in n && typeof (n as { value: unknown }).value === 'string') {
      p.push((n as { value: string }).value);
    }
  });
  return p.join('');
}

interface Item {
  title: string;
  url: string;
  items?: Item[];
}

interface Items {
  items?: Item[];
}

function getItems(node: Node | null | undefined, current: Item): Items {
  if (!node) {
    return {};
  }

  if (node.type === 'paragraph') {
    visit(node, (item) => {
      if (item.type === 'link') {
        current.url = item.url;
        current.title = flattenNode(node);
      }

      if (item.type === 'text') {
        current.title = flattenNode(node);
      }
    });

    return current;
  }

  if (node.type === 'list') {
    current.items = (node.children as Node[]).map((i) =>
      getItems(i, {} as Item),
    );

    return current;
  } else if (node.type === 'listItem') {
    const heading = getItems(node.children[0], {} as Item);

    if (node.children.length > 1) {
      getItems(node.children[1], heading);
    }

    return heading;
  }

  return {};
}

const getToc = () => (node: Node, file: { data: Items }) => {
  const table = toc(node);
  file.data = getItems(table.map, {} as Item);
};

export type TableOfContents = Items;

export async function getTableOfContents(
  content: string,
): Promise<TableOfContents> {
  const result = await remark().use(getToc).process(content);

  return result.data as TableOfContents;
}
