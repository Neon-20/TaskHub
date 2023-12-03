"use client";
import { useMobileSideBar } from "@/hooks/use-sidebar";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect,useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet,SheetContent } from "@/components/ui/sheet";
import SideBar from "./sidebar";
import { dark } from '@clerk/themes';

const MobileSideBar = () => {
const onOpen = useMobileSideBar((state)=>state.onOpen);
const onClose = useMobileSideBar((state)=>state.onClose)
const isOpen = useMobileSideBar((state)=>state.isOpen)
const[isMounted,setIsMounted] = useState(false);

const pathname = usePathname();
useEffect(()=>{
    setIsMounted(true);
},[])

//whenever our url changes, mobile sidebar will close.
useEffect(()=>{
    onClose();
},[pathname,onClose]);

if(!isMounted){
    return null;
}
//but if it is mounted then it can be rendered on client side without hydration errors


    return ( 
    <>
    <Button
    onClick={onOpen}
    className="block md:hidden mr-2 text-white hover:bg-sky-200"
    variant="ghost"
    size="sm"
    >
    <Menu className="h-4 w-4"/>
    </Button>
    <Sheet
    open = {isOpen} onOpenChange={onClose}
    >
    <SheetContent
    side="left"
    className="p-2 pt-10 bg-black text-white"
    >
        <SideBar
        storageKey = "mobile-sidebar-state"
        />
    </SheetContent>
    </Sheet>
    </>
    );
}

export default MobileSideBar;