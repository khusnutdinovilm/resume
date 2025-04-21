export interface ISkillItem {
  id: number;
  name: string;
  value: number;
}

export interface IExpertiseItem {
  id: number;
  title: string;
  description: string;
}

export interface ILinkItem {
  id: number;
  href: string;
  svgLink: string;
}

export interface IMeInfo {
  name: string;
  surname: string;
  specilization: string;
  avatarUrl: string;
  phone: string;
  email: string;
  location: string;
  web: string;
  links: ILinkItem[];
}
