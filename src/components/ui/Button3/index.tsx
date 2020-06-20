import React from "react";

import {Button as BButton} from "react-bootstrap";
type ButtonProps = {
    text: string,
    otra?: Number
}
const Button3 = ({text}: ButtonProps) => {
    
    return (
    <BButton >
        {text}    
    </BButton>
    )
}

export default Button3;
