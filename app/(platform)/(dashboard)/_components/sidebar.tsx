"use client";
import Link from "next/link";
import {Plus, PlusIcon} from "lucide-react";
import {useLocalStorage} from "usehooks-ts";
import { useOrganization,useOrganizationList } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";
import NavItem from "./NavItem";

interface SideProps{
    storageKey?:string
}

const SideBar = ({
    storageKey="sidebar-state",
}:SideProps) => {
    const[expanded,setExpanded] = useLocalStorage<Record<string,any>>
    (storageKey,{});

    const {organization: activeOrganization,
    isLoaded:isLoadedOrg} = useOrganization();

    const {userMemberships,
    isLoaded: isLoadedOrgList } = useOrganizationList({
    userMemberships:{
        infinite:true //kind of a pagination
    }
    })
    // If I am wrong I can be here
    const defaultAccordionValue: string[] = Object.keys(expanded)
    .filter(key => expanded[key])

    //This takes organisation id as string here
    const onExpand = (id:string) =>{
    setExpanded(current =>({
        ...current,
        [id]:!expanded[id]
    }))
    }

    //Loading state 
    if(!isLoadedOrg || !isLoadedOrg || userMemberships.isLoading){
        return(
        <>
        <Skeleton/>
        </>
        )
    }

    return ( 
        <>
        <div className="font-medium text-md text-slate-300 flex items-center mb-1">
            <span className="pl-4">
            Workspaces
            </span>
        <Button
        asChild
        size="sm"
        variant="ghost"
        className="ml-auto"
        >
        <Link href="/select-org">
            <PlusIcon className="h-4 w-4"/>
        </Link>
        </Button>
        </div>
        <Accordion
        type="multiple"
        defaultValue={defaultAccordionValue}
        className="space-y-2"
        >
        {userMemberships.data?.map(({organization})=>(
            <NavItem
            key={organization.id}
            isActive = {activeOrganization?.id === organization.id}
            isExpanded = {expanded[organization.id]}
            organization = {organization}
            onExpand = {onExpand}
            />
        ))}
        </Accordion>
        </>
    );
}

export default SideBar;