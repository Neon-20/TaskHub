import MemberSubscribed from "./_components/MemberSubscribed";
import SnowFallBg from "./_components/SnowfallBg";
import {CircleDollarSign, ExternalLink, GithubIcon, LinkedinIcon} from "lucide-react";
import Link from "next/link";
// import {PostHog} from "posthog-node"


const MarketingPage = () => {
    return ( 
        <main className="flex relative h-screen flex-col
        items-center justify-between p-36 max-sm:p-14">
        <SnowFallBg />
        <div className="flex h-full w-full 
        items-center flex-col gap-6">
        <MemberSubscribed/>
        <div className="flex flex-col items-center justify-center
        w-full gap-4">
        <h1 className="text-3xl font-bold sm:text-5xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-tr from-white to-neutral-800 capitalize max-sm:text-[1.4rem] md:max-w-3xl lg:max-w-5xl">
        TaskHub For WorkFlows <span className="hidden sm:inline"> 🚀</span>
        </h1>
        <p className="max-w-[750px] leading-7 text-center text-[16px] bg-clip-text text-transparent bg-gradient-to-br from-white  to-neutral-700 max-sm:text-xs">
        Revolutionize your project management experience. 
        Elevate efficiency, track progress effortlessly, and conquer deadlines with our awesome project management tool. 
        </p>
        </div>  
        <div className="flex gap-3 flex-col w-full items-center justify-center">
        
        <Link href="/sign-in">
        <button className="btn" type="button"
        >
        <strong>Get Started</strong>
        <div id="container-stars">
        <div id="stars"></div>
        </div>
        <div id="glow">
        <div className="circle"></div>
        <div className="circle"></div>
        </div>
        </button>
        </Link>
        <div className="flex p-2 gap-6 text-gray-300 translate-x-0.5 duration-300">
        <Link href = "https://github.com/Neon-20" target ="_blank">
        <GithubIcon className="h-6 w-6 hover:text-white"/>
        </Link>
        <Link href = "https://www.linkedin.com/in/pranav-rajveer/" target ="_blank">
        <LinkedinIcon className="h-6 w-6 hover:text-white"/>
        </Link>
        <Link href = "https://lol.pranavrajveer.com" target ="_blank">
        <ExternalLink className="h-6 w-6 hover:text-white"/>
        </Link>
        <Link href = "https://github.com/sponsors/Neon-20?o=esb" target ="_blank">
        <CircleDollarSign className="h-6 w-6 hover:text-white"/>
        </Link>
        </div>
        </div>
        </div>
        {/* <div className="fixed bottom-10 right-6 hidden md:block p-4">
        <iframe src="https://github.com/sponsors/Neon-20/button" title="Sponsor Neon-20" height="32" width="114" className="border-0 rounded-lg cursor-pointer "></iframe>
        </div> */}
        </main>
    );
}

export default MarketingPage;