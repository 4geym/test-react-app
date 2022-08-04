import React, { useState } from "react";

const Input = () => {
    const [value, setValue] = useState('Some Text');

    return (
        <div className="bebe">
            <p>{value}</p>
            <input type="text" value={value} onChange={event => setValue(event.target.value)}/>
        </div>
    )
}

export default Input;