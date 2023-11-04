interface IPeople {
  name: string;
  height: number;
  mass: number;
  hairColor: number;
  skinColor: number;
  eyeColor: number;
  birthYear: string;
  gender: string;
  homeWorld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface IData {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPeople[];
}
