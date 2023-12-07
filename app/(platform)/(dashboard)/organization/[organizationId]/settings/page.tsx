import { OrganizationProfile } from "@clerk/nextjs";

const Settings = () => {
    return ( 
        <div className="w-full">
        <OrganizationProfile 
        appearance={{
            elements:{
                rootBox:{
                    boxShadow:"none",
                    width:"100%",
                    height:"100",
                    backgroundColor:"#030712"
                },
                card:{
                    border:"1px solid #030712",
                    boxShadow:"none",
                    width:"100%",
                    backgroundColor:"#030712",
                    textColor:"#ffffff"
                }
            }
        }}
        
        />
        </div>
    );
}

export default Settings;