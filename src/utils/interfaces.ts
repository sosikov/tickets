export type TComponentTabs = {
  tabs: TTab[];
  activeTab: string;
  setActiveTab: (value: string) => void;
}

export type TTab = {
  label: string;
  value: string;
}
