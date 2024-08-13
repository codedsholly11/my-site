"use client"
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const [name, setName]= useState()
    const [email, setEmail]= useState()
    const [message, setMessage]= useState()
        async function fetchApi(e){
            e.preventDefault()
            try {
                const baseurl='https://forms-io.onrender.com/submit-form/b1b149d9-2898-4188-8230-f163f7f90c62'
                const response= await fetch (baseurl,{
                    method:'POST',
                    headers:{'content-Type' : 'application/json'},
                    body:JSON.stringify({name, email, message})
                })
                .then((res)=>(res.json))
                if (response){
                    toast.warn ('Message sent!!!')

                }
            } catch (error) {
                console.log(error);
                
            }
        }
            
        
  return (
    <>
        <form onSubmit={fetchApi} className='flex px-[50px] flex-col items-center justify-center gap-[30px]'>
            <h1 className='text-3xl font-bold'>Contact Me</h1>
            <div className='flex gap-[30px] '>
                <div>
                    <h1 className='text-xl font-bold text-gray-500'>Name</h1>
                    <input onChange={(e)=>setName(e.target.value)} value={name} required  className='border-2 w-[40vw] h-[10vh] rounded-full px-[20px]' type="text" placeholder='Full Name'/>
                </div>
                <div>
                    <h1 className='text-xl font-bold text-gray-500'>Email</h1>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} required  className='border-2 w-[43vw] h-[10vh] rounded-full px-[20px]' type="text" placeholder='Email Address'/>
                </div>
            </div>
           <div>
                <div>
                    <h1 className='text-xl font-bold text-gray-500'>Message</h1>
                    <textarea onChange={(e)=>setMessage(e.target.value)} value={message} required className='border-2 w-[85vw] h-[60vh] rounded-3xl px-[20px]'placeholder='How can i be of help ? ' name="" id=""></textarea>
                </div> 
           </div>
           <div>
                <button className='px-[40px] border-2 rounded-full bg-gray-400 py-[5px] font-bold'>Submit</button>
            </div>
                <ToastContainer/>
        </form>
    </>
  )
}

export default Contact
