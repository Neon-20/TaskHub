const ClerkLayout = ({
    children,
}:{
    children: React.ReactNode
}) => {
    return (
        <div className="h-screen items-center justify-center flex">
        {children}
        </div>

    );
}

export default ClerkLayout;

/*
</div>
*/