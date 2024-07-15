import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Sidebar({ user }: SiderbarProps) {

    return (
        <section className='sidebar'>
            <nav className='flex flex-col gap-4'>
                <Link href='/'
                    className='mb-12 cursor-pointer items-centergap-2'>
                    <Image alt="Bankify Logo" height={34} width={34} src='/icons/logo.svg'/>
                </Link>
            </nav>
        </section>
    )
}

export default Sidebar