"use client";
import React,{useState,useEffect} from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useTheme } from 'next-themes';

const DarkMode = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const currentTheme = theme === 'dark' ? systemTheme : theme;
    useEffect(() => setMounted(true), []);
    return (
        <>
            {mounted && currentTheme === 'dark' ? <LightModeIcon onClick={() => setTheme('light')} className='text-2xl cursor-pointer hover:text-amber-500'/> : <DarkModeIcon onClick={() => setTheme('dark')} className='text-2xl cursor-pointer hover:text-amber-500'/>}
        </>
    )
}

export default DarkMode