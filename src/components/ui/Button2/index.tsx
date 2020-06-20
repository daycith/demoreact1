import React from "react";

import {Button as BButton} from "react-bootstrap";

type ButtonProps = {
    text: string
}
const Button2 = (props:ButtonProps) => {
    const {text} = props
    return (
    <BButton >
        {text}
    </BButton>
    )
}

export default Button2;
