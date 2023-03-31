import React, { useState } from 'react';
import CompB from './CompB';
import { createContext } from 'react';
export const ThemeContext = createContext();
export default function Context_UseContext() {
    const [theme, setTheme] = useState('dark');
    const [content, setContent] = useState('Rikkei Academy - học viện đào tạo CNTT chất lượng Nhật Bản');
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    return (
        <div>
            <h2>React Hook - Context - useContext</h2>
            <ThemeContext.Provider value={{ theme, content }}>
                <CompB />
            </ThemeContext.Provider>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}
