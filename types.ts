export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  children?: NavItem[];
}

export interface FeaturePoint {
  id: string;
  text: string;
  icon: string; // We'll map string names to actual icons in component
}

export interface Statistic {
  value: string;
  label: string;
}