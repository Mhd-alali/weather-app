import React from 'react';
function Flex({classes,children}) {
    return ( 
    <div className={`flex items-center justify-between ${classes}`}>
    {children}
    </div> 
    );
}

export default Flex;