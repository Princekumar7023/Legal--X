export type LawyerDetails = {
  userId: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  description: string;
  profile_image?: string | undefined;
  categories: string[];
  languages: string[];
  experience: string;
  education: string;
  barCouncil: string;
  nationality: string;
};
