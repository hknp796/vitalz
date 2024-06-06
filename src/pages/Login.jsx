
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
function Login() {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        navigate("/");
        return
        e.preventDefault()
        useAxios({
            method: 'post',
            url: `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/login`,
            body:{
                email:'af',
                password:'hello'
            },
            successCallBack: ({ message }) => {
                console.log({message});
                useSaveToken(null)
                // toast.success(message)
            }
        })
    }
    return (
        <div className='bg-[#19191A] h-[98vh] m-2 md:flex justify-center items-center '>
            <div className='w-[100%] h-[100%] md:w-[50%] md:block  hidden'><img src="/homeImage.jpg" alt="" className='object-cover h-[100%] w-[100%]' /></div>
            <div className='w-[100%] h-[100%] md:w-[50%] flex justify-center items-center'>
                <form className='md:w-[40%] w-[80%] '>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                        <input type="email" id="email" className=" text-white bg-[#121213] border border-gray-500  text-sm rounded-lg block w-full p-5 focus:ring-blue-500 " placeholder="name@flowbite.com" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Your password</label>
                        <input type="password" id="password" className="text-white bg-[#121213] border border-gray-500  text-sm rounded-lg block w-full p-5 focus:ring-blue-500 " placeholder="name@flowbite.com" required />
                    </div>

                    <button type="submit" className=" text-gray-300 bg-gray-500 font-medium rounded-lg text-sm  w-[100%] px-5 py-5 text-center " onClick={handleSubmit}>Sign In</button>
                    <div className="flex items-start mb-6">
                        <label htmlFor="remember" className="mt-5 text-sm font-medium text-white text-center  w-[100%]">Forgot Password</label>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login