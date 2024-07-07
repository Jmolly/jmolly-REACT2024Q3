import axios from 'axios';
import { StarWarsItemType } from '../types';

export const getStarWarsCharacters = async (
  search?: string,
): Promise<StarWarsItemType[]> => {
  const response = await axios.get('https://swapi.dev/api/people/', {
    params: { search },
  });

  return response.data.results.map((el: { name: string; url: string }) => ({
    id: el.name,
    name: el.name,
    description: el.url,
  }));
};
