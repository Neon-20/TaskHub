import SnowFallBg from "@/app/(marketing)/_components/SnowfallBg";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
return (
    <>
    <SnowFallBg />
    <SignIn />;
    </>
)
}