import React from 'react';
function Flex({classes,children,onClick}) {
    return ( 
    <div onClick={onClick} className={`flex items-center justify-between ${classes}`}>
    {children}
    </div> 
    );
}

export default Flex;