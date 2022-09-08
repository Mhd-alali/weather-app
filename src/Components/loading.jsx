import React from 'react';

function Loading({isLoading,error}) {
    return ( 
    <div className={`fixed top-0 text-2xl z-50 left-0 w-screen h-screen child:animate-spin bg-primary-light child:w-16 flex items-center transition-transform duration-300 ease-in justify-center ${isLoading ?"":"-translate-y-full"}`}>
        {error ? error.message + " .·´¯`(>▂<)´¯`·. ": <img src='./assets/icons/Loading.svg'/> }
    </div> );
}

export default Loading;