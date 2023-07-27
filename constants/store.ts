// import { create, SetState } from 'zustand';

// interface StoreState {
//   businessOffers: Record<string, any>; // Update the type according to your data structure,
//   singleOffer: Record<string, any>;
// }

// interface StoreActions {
//   setBusinessOffers: (offers: any[]) => void; // Update the type according to your data structure
//   setSingleOffer: (offer: any) => void; // Update the type according to your data structure
// }

// const useStore = create<StoreState, StoreActions>((set: SetState<StoreState>) => ({
//   businessOffers: [],
//   singleOffer: {},
//   setBusinessOffers: (offers) => set(() => ({ businessOffers: offers })),
//   setSingleOffer: (offer) => set(() => ({ singleOffer: offer })),
// }));

// export default useStore;
