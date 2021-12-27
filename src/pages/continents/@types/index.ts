export type Continent = {
  id: number;
  name: string;
  description: string;
  full_description: string;
  slug: string;
  link: string;
  image: string;
  countries: number;
  cities: number;
  languages: number;
};

export type City = {
  id: string;
  name: string;
  country: string;
  flag: string;
  image: string;
  continentId: number;
}