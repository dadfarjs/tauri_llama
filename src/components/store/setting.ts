import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

type Store = {
  openDialog: boolean;
  setOpenDialog: (open: boolean) => void;
  typeAi: string;
  setTypeAi: (type: string) => void;
};

const useStore = create<Store>()(
  devtools(set => ({
    openDialog: false,
    setOpenDialog: open => set(state => ({ openDialog: open })),
    typeAi: '',
    setTypeAi: type => set(state => ({ typeAi: type })),
  })),
);

export const useSettingDialogStore = useStore;
