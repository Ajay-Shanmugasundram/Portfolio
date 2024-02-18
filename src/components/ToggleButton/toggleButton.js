// ToggleButton.js

import React, { useEffect, useState } from 'react';
import './toggleButton.css';

const ToggleButton = ({ setTheme }) => {
    const [isChecked, setChecked] = useState(true);

    const handleToggle = () => {
        setChecked(!isChecked);
    };

    useEffect(() => {
        if (isChecked) {
            setTheme('dark')
        } else {
            setTheme("light")
        }
    }, [isChecked])


    return (
        <label className={`toggle-button ${isChecked ? 'active' : ''}`}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleToggle}
            />
            <span className="slider"></span>
        </label>
    );
};

export default ToggleButton;
