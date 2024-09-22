'use client'
import React from 'react'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Footer from './footer'



function MobileNav({ user }: MobileNavProps) {
    const pathname = usePathname()
    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger>
                    <Image
                        src='/icons/hamburger.svg'
                        height={30}
                        width={30}
                        alt='menu'
                        className='cursor-pointer'
                    />
                </SheetTrigger>
                <SheetContent className='border-none bg-white'>
                    <Link href='/'
                        className='px-4 flex cursor-pointer items-center gap-1'>
                        <Image alt="Bankify Logo"
                            height={34}
                            width={34}
                            src='/icons/logo.svg'
                        />
                        <h1 className='text-26 font-ibm-plex-serif
                        font-bold text-black-1'>Bankify</h1>
                    </Link>
                    <div className="mobilenave-sheet">
                        <SheetClose asChild>
                            <nav className="flex flex-col h-full pt-16 gap-6 text-white">
                                {sidebarLinks.map((item) => {
                                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                                    return (
                                        <SheetClose asChild id={item.label}>
                                            <Link href={item.route} key={item.label}
                                            className={cn('mobilenav-sheet_close w-full', { 'bg-bank-gradient': isActive })}>
                                            
                                                <Image 
                                                width={20}
                                                height={20}
                                                src={item.imgURL} alt={item.label} 
                                                    className={cn({ 'brightness-[3] invert-0': isActive })}
                                                />
                                                <p className={cn('text-16 font-semibold text-black-2', { '!text-white': isActive })}>{item.label}</p>

                                          
                                        </Link>
                                        </SheetClose>

                                    )
                                })}

                                INFORMATION
                            </nav>
                        </SheetClose>
                        <Footer user={user} type='mobile'/>
                    </div>
                </SheetContent>
            </Sheet>
        </section>

    )
}

export default MobileNav