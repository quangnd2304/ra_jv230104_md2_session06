import React, { useContext } from 'react';
import { ThemeContext } from './Context_UseContext';

export default function CompC() {
    const themeObj = useContext(ThemeContext);
    return (
        <div>
            <p className={themeObj.theme}>{themeObj.content}</p>
        </div>
    )
}
