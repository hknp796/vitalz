

function Login() {
    return (
        <div className='bg-[#19191A] h-[98vh] m-2 md:flex justify-center items-center '>
            <div className='w-[100%] h-[100%] md:w-[50%] md:block  hidden'><img src="/homeImage.jpg" alt="" className='object-cover h-[100%] w-[100%]' /></div>
            <div className='w-[100%] h-[100%] md:w-[50%] flex justify-center items-center'>
                <form className='md:w-[40%] w-[80%] '>
                    <div className="mb-6">
                        <label for="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                        <input type="email" id="email" className="bg-[#121213] border border-gray-500 text-gray-900 text-sm rounded-lg block w-full p-5 focus:ring-blue-500 " placeholder="name@flowbite.com" required />
                    </div>
                    <div className="mb-6">
                        <label for="password" className="block mb-2 text-sm font-medium text-white">Your password</label>
                        <input type="password" id="email" className="bg-[#121213] border border-gray-500 text-gray-900 text-sm rounded-lg block w-full p-5 focus:ring-blue-500 " placeholder="name@flowbite.com" required />
                    </div>

                    <button type="submit" className=" text-gray-300 bg-gray-500 font-medium rounded-lg text-sm  w-[100%] px-5 py-5 text-center ">Sign In</button>
                    <div className="flex items-start mb-6">
                        <label for="remember" className="mt-5 text-sm font-medium text-white text-center  w-[100%]">Forgot Password</label>
                    </div>
                </form>
            </div>


        </div>
    )
}

export default Login