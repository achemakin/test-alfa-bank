import create from 'zustand';

interface IAnimal {
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
  isLike: boolean;
}

type AppStore = {
  animals: IAnimal[];
  isLoading: boolean;
  error: any;
  filter: boolean;
  updateFilter: () => void;
  fetchAnimals: () => void;
  updateAnimals: (id: number) => void;
  removeAnimal: (id: number) => void;
}

const useStore = create<AppStore>((set, get) => ({
  animals: [],
  isLoading: false,
  error: null,
  filter: false,
  updateFilter() {
    const filter = !get().filter;
    set({ filter });
  },
  updateAnimals(id) {
      const animals = get().animals.map((item) =>
        item.id === id ? { ...item, isLike: !item.isLike } : item
      );
    set({ animals });
  },
  removeAnimal(id) {
   const animals = get().animals.filter((item) => item.id !== id);
   set({ animals });
  },
  async fetchAnimals() {
    set({ isLoading: true })
    try {
      const response = await fetch('https://zoo-animal-api.herokuapp.com/animals/rand/10');
      if (!response.ok) throw response;
      const result = await response.json();
      // Добавить свойство isLike в объект Animal
      set({ animals: result.map((item: IAnimal) => {
            return { ...item, isLike: false}
          }) 
        });
      } catch (e: any) {
        let error = e;
        if (e.statusCode === 400) {
          error = await e.json();
        }
        set({ error });
      } finally {
        set({ isLoading: false });
      }
    }
  }
))

export default useStore;