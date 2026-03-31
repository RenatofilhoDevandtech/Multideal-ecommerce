
export interface SiteConfig {
  name: string;
  slogan: string;
  logo: string;
  whiteLogo: string;
  address: string;
  phone: string;
  email: string;
  social: {
    facebook: string;
    instagram: string;
    twitter: string;
    whatsapp: string;
    linkedin?: string;
    github?: string;
  };
}
