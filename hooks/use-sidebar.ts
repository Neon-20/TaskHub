import {create} from "zustand";

//defining types for the store here
type MobileSideBarStore = {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void,
}

export const useMobileSideBar = create<MobileSideBarStore>((set)=>({
    isOpen: false,
    onOpen: () => set({isOpen:true}),
    onClose: () => set({isOpen:false})
}))
