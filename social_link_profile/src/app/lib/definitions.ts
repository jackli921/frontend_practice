export interface SocialLink {
  platform: string;
  url: string;
}

export interface Profile {
  id: number,
  profileUrl: string,
  fullName: string;
  city: string;
  country: string;
  bio: string;
  socialLinks: SocialLink[];
}