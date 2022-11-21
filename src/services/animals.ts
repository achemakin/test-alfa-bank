import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Animal =  {  
  name: string;
  latin_name: string;
  animal_type: string;
  active_time: string;
  length_min: string;
  length_max: string;
  weight_min: string;
  weight_max: string;
  lifespan: string;
  habitat: string;
  diet: string;
  geo_range: string;
  image_link: string;
  id: number;
};

export const animalsApi = createApi({
  reducerPath: 'animalsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://zoo-animal-api.herokuapp.com/' }),
  endpoints: (builder) => ({
    getAnimals: builder.query({
      query: () => `animals/rand/10`,
      transformResponse: (rawResult: Animal[]) => {
        
        return [...rawResult.map((item: Animal) => {
          return { ...item, isLike: false }
        })];
      },      
    }),
  }),
})

console.log(animalsApi.util.updateQueryData);

export const { useGetAnimalsQuery } = animalsApi;