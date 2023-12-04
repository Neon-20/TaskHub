"use client";
import Link from "next/link";
import {Plus, PlusIcon} from "lucide-react";
import {useLocalStorage} from "usehooks-ts";
import { useOrganization,useOrganizationList } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";
import NavItem,{ Organization } from "./NavItem";

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
    //This basically does capture the truthy values from the 
    // expanded array

    const defaultAccordionValue: string[] = Object.keys(expanded)
    .reduce((acc:string[],key:string)=>{
        if(expanded[key]){
            acc.push(key);
        }
        return acc;
    },[])

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
    <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
	<circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 660" stroke-dashoffset="-330" stroke-linecap="round"></circle>
	<circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 220" stroke-dashoffset="-110" stroke-linecap="round"></circle>
	<circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
	<circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
</svg>

        </>
        )
    }

    return ( 
        <>
        <div className="font-medium text-sm text-slate-400 flex items-center mb-1">
            <span className="pl-2">
            My Workspaces
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
        className="space-y-2 text-white"
        >
        {userMemberships.data?.map(({organization})=>(
            <NavItem
            key={organization.id}
            isActive = {activeOrganization?.id === organization.id}
            isExpanded = {expanded[organization.id]}
            organization = {organization as Organization}
            onExpand = {onExpand}
            />
        ))}
        </Accordion>
        </>
    );
}


export default SideBar;