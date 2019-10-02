import React from 'react';

const Button = ({
    value,
    className,
    onChange
}) => {
    return (
        <button onChange={onChange} className={`${className} button`}>
            {value}
        </button>
    )
}

export default Button;