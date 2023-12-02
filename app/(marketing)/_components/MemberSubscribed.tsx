import Link from "next/link";

const MemberSubscribed = () => {
    return(
    <Link href = "" target="_blank">
        <span className="gap-2 animate-pulse justify-center items-center text-xs p-2 border border-white rounded-full flex text-white cursor-pointer">
        <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
        100+ Members Subscribed 
    </span>
    </Link>

    )
}

export default MemberSubscribed;