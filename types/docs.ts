export type NavItem = {
  title: string;
  href?: string;
  disabled?: boolean;
  label?: string;
  event?: string;
};

export type NavItemWithChildren = NavItem & {
  items?: NavItemWithChildren[];
};

export type DocsConfig = {
  mainNav: NavItemWithChildren[];
  sidebarNav: NavItemWithChildren[];
};
