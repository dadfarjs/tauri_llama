import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type Store = {
  openSidebar: boolean;
  setOpenSidebar: (open: boolean) => void;
};

const useStore = create<Store>()(
  devtools(set => ({
    openSidebar: true,
    setOpenSidebar: open => set(state => ({ openSidebar: open })),
  })),
);

export const useGlobalStore = useStore;
