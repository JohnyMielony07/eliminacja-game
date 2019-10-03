import React from 'react';

const Button = ({
    value,
    className,
    onClick
}) => {
    return (
        <button onClick={onClick} className={`${className} button`} >
            {value}
        </button>
    )
}

export default Button;