import { create } from 'zustand';
import { APIData, APIError } from '../api/types';

export interface Store {
  data: APIData | null;
  error: APIError | null;
}

export type GlobalStore = {
  store: Store;
  setStore: (store: Store) => void;
};

const useStore = create<GlobalStore>()((set) => ({
  store: { data: null, error: null },
  setStore: (store) => set({ store }),
}));

export default useStore;
