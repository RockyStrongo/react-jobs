import React from 'react';
import Link from 'next/link';
import { Url } from 'url';

type Props = {
    link?: string,
}

export default function Button({ link }: Props) {

    return (

        <a href={link}  >
            <button className='font-titles rounded-xl m-10 bg-primary text-tertiary px-6 py-3 h-20 duration-300 hover:bg-transparent hover:text-tertiary hover:border-tertiary	 hover:border-solid	hover:border focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 align-middle'>
                Apply </button>
        </a>

    )

}


