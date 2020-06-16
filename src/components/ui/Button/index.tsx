import React from "react";

import {Button as BButton} from "react-bootstrap";

const Button = (props) => {
    return (
    <BButton {...props} >
        {props.text}
    </BButton>
    )
}

export default Button;
