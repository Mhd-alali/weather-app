import React from 'react';
import { ReactComponent as LoadingIcon } from "../assets/icons/Loading.svg";

function Loading({isLoading}) {
    return ( 
    <div className={`fixed top-0 z-50 left-0 w-screen h-screen child:animate-spin bg-primary-light child:w-16 flex items-center transition-transform duration-300 justify-center ${isLoading ?"":"-translate-y-full"}`}>
        <LoadingIcon/>
    </div> );
}

export default Loading;