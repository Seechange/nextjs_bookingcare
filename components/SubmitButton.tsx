import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

interface ButtonProps {
    isLoading: boolean
    children: React.ReactNode,
    className?: string
}
const SubmitButton = ({ isLoading, children, className }: ButtonProps) => {
    return (
        <Button type="submit" disabled={isLoading} className={className ?? "bg-gray-500 w-full mt-2 cursor-pointer hover:bg-gray-700"}>
            {isLoading ? (
                <div className='flex items-center gap-4'>
                    <Image src="/assets/icons/loader.svg" height={24} width={24} alt="loading" className='animate-spin' />
                    Loading ...
                </div>
            ) : children}
        </Button>
    )
}

export default SubmitButton
