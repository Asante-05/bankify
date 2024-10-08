'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form" 
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
  
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomInput from './customInput'
import { authformSchema } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { getLoggedInUser, signIn, signUp } from '@/lib/actions/user.actions'



function AuthForm({ type }: { type: string }) {
    const router = useRouter()
    const [user, setUser] = useState()
    const [isloading, setIsLoading] = useState(false)
    

    const formschema = authformSchema(type)

    const form = useForm<z.infer<typeof formschema>>({
        resolver: zodResolver(formschema),
        defaultValues: {

        },
    })

    // 2. Define a submit handler.
    const  onSubmit = async(data: z.infer<typeof formschema>) => {
        setIsLoading(true)
        try{
            // sign Up with Appwrite & create a plain token
            if (type==='sign-up'){
                const newUser = await signUp(data);
                setUser(newUser)
            }
            if (type==='sign-in'){
                const response = await signIn({
                    email: data.email,
                    password: data.password,
                })
                if (response) router.push('/')
            }
        }catch(error){
            console.log(error)
        }finally{
            
        }
        setIsLoading(false)
    
    }


    return (
        <section className='auth-form'>
            <header className='flex flex-col gap-5 md:gap-8'>
                <Link href='/'
                    className=' flex cursor-pointer items-center gap-1'>
                    <Image alt="Bankify Logo"
                        height={34}
                        width={34}
                        src='/icons/logo.svg'
                    />
                    <h1 className='text-26 font-ibm-plex-serif
                        font-bold text-black-1'>Bankify</h1>
                </Link>

                <div className="flex flex-col gap-1 md:gap-3">
                    <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
                        {user
                            ? 'Link Account'
                            : type === 'sign-in'
                                ? 'Sign In'
                                : 'Sign Up'
                        }
                        <p className='text-16 font-noraml text-gray-600'>
                            {user
                                ? 'Link your account to get started '
                                : 'Please enter your detail'
                            }
                        </p>
                    </h1>
                </div>
            </header>
            {user ?
                (
                    <div className='flex flex-col gap-4'>

                    </div>
                ) : (
                    <>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                {type === 'sign-up' ?
                                    (
                                        <>
                                            <div className="flex gap-4">

                                                <CustomInput control={form.control} name='firstName' label='First Name' placeholder='Enter your first name' />
                                                <CustomInput control={form.control} name='lastName' label='Last Name' placeholder='Enter your last name' />
                                            </div>
                                            <CustomInput control={form.control} name='address1' label='Address' placeholder='Enter your speicific address' />
                                            <CustomInput control={form.control} name='city' label='City' placeholder='Enter your city' />
                                            <div className="flex gap-4">
                                                <CustomInput control={form.control} name='state' label='State' placeholder='Example: NY' />
                                                <CustomInput control={form.control} name='postalCode' label='Postal Code ' placeholder='Enter your postal code ' />
                                            </div>
                                            <div className="flex gap-4">
                                                <CustomInput control={form.control} name='dob' label='Date of Birth' placeholder='YYYY-MM-DD' />
                                                <CustomInput control={form.control} name='ssn' label='SSN' placeholder='Example: 1234' />
                                            </div>
                                        </>
                                    ) : ''}
                                <CustomInput control={form.control} name='email' label='Email' placeholder='Enter your email' />
                                <CustomInput control={form.control} name='password' label='Password' placeholder='Enter your password' />

                                <div className='flex flex-col gap-4'>
                                    <Button type="submit" 
                                    disabled={isloading}
                                    
                                        className='form-btn'>{
                                            isloading
                                                ?
                                                (<>
                                                    <Loader2 size={20}
                                                        className='animate-spin' /> &nbsp;
                                                    Loading...
                                                </>)
                                                : type === 'sign-in'
                                                    ? 'Sign in' : 'Sign up'
                                        }
                                    </Button>
                                </div>

                            </form>
                            <footer className='flex justify-center gap-1'>
                                <p className='text-14 font-normal text-gray-600'>
                                    {type === 'sign-in'
                                        ? "Don't have an account?"
                                        : "Already have an accout?"}
                                </p>
                                <Link className='form-link' href={type === 'sign-in' ? '/sign-up' : '/sign-in'} >
                                    {type === 'sign-in' ? "Sign Up" : "Sign In"}
                                </Link>

                            </footer>
                        </Form>
                    </>
                )}
        </section>
    )
}

export default AuthForm