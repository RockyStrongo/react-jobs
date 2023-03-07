import React from 'react';
import Button from './Button';

type Props = {
    jobTitle: string,
    companyName: string,
    jobDescription: string,
    link?: string,
}

export default function Card({
    jobTitle,
    companyName,
    jobDescription,
    link,
}: Props) {

    return (
        <>
            <div className='font-content text-primary flex flex-col bg-gradient-to-br from-blue-100 via-blue-100 to-orange-100 rounded-xl drop-shadow-lg h-50 m-5' >
                <div className='text-xl mt-5 mx-5 font-titles'>{jobTitle}</div>
                <div className='flex flex-row items-center'>
                    <div className='mx-5 overflow-ellipsis overflow-hidden'>
                        <div className='mb-2 text-tertiary'>{companyName}</div>
                        <div className='mb-5 text-gray-500' dangerouslySetInnerHTML={{__html: jobDescription}}/>
                    </div>

                    <Button link={link} />

                </div>

            </div>
        </>

    )

}


