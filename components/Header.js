import React from 'react'
import MenuItem from './MenuItem'
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link'
import DarkMode from './DarkMode';

const Header = () => {
    return (
        <>
            <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>
                
                <div className='flex items-center '>
                    <Link href='/'>
                        <h2 className='text-2xl'>
                            <span className='text-xl hidden sm:inline'>Scene</span>
                            <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg'>Cyclopedia</span>
                        </h2>
                    </Link>
                </div>
                <div className='flex'>
                <DarkMode />
                </div>
            </div>
        </>
    )
}

export default Header