import { create } from 'zustand';

export type Fonts = '--ff-sans' | '--ff-serif' | '--ff-mono';

interface GlobalStoreState {
  globalFont: Fonts;
  setGlobalFont: (val: Fonts) => void;
}

const useGlobalStore = create<GlobalStoreState>()((set) => ({
  globalFont: '--ff-sans',
  setGlobalFont: (val) => set(() => ({ globalFont: val })),
}));

export default useGlobalStore;
