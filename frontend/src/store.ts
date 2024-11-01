import { create } from "zustand";
import { NetworkLayer } from "./dojo/createNetworkLayer";

export type Store = {
    networkLayer: NetworkLayer | null;
};

export const store = create<Store>(() => ({
    networkLayer: null,
    phaserLayer: null,
}));

export const useUIStore = create((set) => ({
    loggedIn: false,
    setLoggedIn: () => set(() => ({ loggedIn: true })),
}));
