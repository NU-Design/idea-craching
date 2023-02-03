import React, { useState } from 'react';

const StartFunctionOnClick = ({ startFunction }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        startFunction();
    };

    return (
        <div onClick={handleClick}>
            {isClicked ? 'Function Started' : 'Start Function'}
        </div>
    );
};

export default StartFunctionOnClick;