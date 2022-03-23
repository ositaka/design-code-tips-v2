import { useEffect, useState } from 'react';

export const useDarkMode = () => {
    const [theme, setTheme] = useState('light-theme');
    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    };

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setMode('dark-theme')
            document.documentElement.classList.remove('light-theme')
            document.documentElement.classList.add('dark-theme')
        } else {
            setMode('light-theme')
            document.documentElement.classList.remove('dark-theme')
            document.documentElement.classList.add('light-theme')
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme ?
            setMode('dark-theme') :
            localTheme ?
                setTheme(localTheme) :
                setMode('light-theme');
    }, []);

    return [theme, toggleTheme]
};