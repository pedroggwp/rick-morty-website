export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: LocationReference;
    location: LocationReference;
    image: string;
    episode: string[];
    url: string;
    created: string;
  }
  
export interface LocationReference {
    name: string;
    url: string;
  }
  