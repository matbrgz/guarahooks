import { CategoryCard } from '@/components/category-card';
import { PageBanner } from '@/components/page-banner';
import { PageGrid } from '@/components/page-grid';

import { categories } from '@/config/hooks';

export default function HooksPage() {
  const sortedCategories = categories.sort((a, b) => {
    if (a.isNew && !b.isNew) return -1;
    if (!a.isNew && b.isNew) return 1;
    return 0;
  });
  return (
    <>
      <PageBanner title="Hooks" subtitle="Select a category to get started." />
      <PageGrid>
        {sortedCategories.map((category) => (
          <CategoryCard
            key={category.slug}
            slug={category.slug}
            name={category.name}
            description={category.description}
            icon={category.icon}
            hooksCount={category.hooks.length}
            isNew={category.isNew}
          />
        ))}
      </PageGrid>
    </>
  );
}
