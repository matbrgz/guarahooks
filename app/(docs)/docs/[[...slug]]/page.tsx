type DocsPageProps = {
  params: {
    slug: Promise<string[]>;
  };
};

export default async function DocsPage({ params }: DocsPageProps) {
  const slug = await params.slug;

  console.log(slug);

  return <h1>hI</h1>;
}
