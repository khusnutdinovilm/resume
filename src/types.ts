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

export interface IPortfolioItem {
  id: number;
  name: string;
  desc: string;
  imgUrl: string;
  repoUrl: string;
  siteUrl: string;
}

export interface ITimelineItem {
  id: number;
  timeframe: {
    start: string;
    end: string;
  };
  name: string;
  specialization: string;
  location: string;
  description: string;
}
