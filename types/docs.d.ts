export type NavItem = {
  title: string;
  href?: string;
  disabled?: boolean;
  label?: string;
  event?: string;
  external?: boolean;
};

export interface NavItemWithChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}

export type DashboardConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};
