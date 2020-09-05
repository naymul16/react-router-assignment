import React from 'react';

const Header = () => {
    const headerStyle = {
        backgroundColor:"#1976D2",
        height:"60px",
        fontSize:"25px",
        letterSpacing:"5px",
        fontStyle:"italic"
    }
    return (
        <div style={headerStyle}>
            <h5 style={{color:"white",textAlign:"center",padding:"18px"}}>News24.com</h5>
        </div>
    );
};

export default Header;