import React from "react";

import {Button as BButton, ButtonProps as BButtonProps} from "react-bootstrap";
interface ButtonProps extends BButtonProps{
    text: string
}
const Button5= (props:ButtonProps) => {
    const {text} = props;
    return (
    <BButton {...props}>
        {text}    
    </BButton>
    )
}

export default Button5;
