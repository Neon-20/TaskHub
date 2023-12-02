"use client";
import Snowfall from "react-snowfall"

const SnowFallBg = () =>{
    return(
        <Snowfall
        color="white"
        radius={[0.5, 0.8]}
        snowflakeCount={300}
        ></Snowfall>
    )
}
export default SnowFallBg;