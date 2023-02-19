import React from 'react';
import HeaderMenu from './HeaderMenu';
import Link from 'next/link';


type MyProps = {
    sticky?: boolean
};
type MyState = {
};

function Header({ sticky }: MyProps) {

    return (

        <div className={`${sticky ? 'sticky top-0 ' : ''
            } z-50	flex items-center drop-shadow-lg bg-secondary`} >

            <Link className='w-full' href="/">
                <h1 className='font-titles text-primary ml-10 sm:text-4xl text-xl w-full hover:text-tertiary'>REACT JOBS IN DENVER</h1>
            </Link>

            <HeaderMenu></HeaderMenu>

        </div>


    );

}

export default Header;
