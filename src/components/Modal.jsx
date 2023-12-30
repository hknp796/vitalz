import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function MyModal(props) {
    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        props.onChildEvent();
    }
    function submitHandler() {
        props.submitHandler( {
            name: 'Leslie Alexander',
            email: 'leslie.alexander@example.com',
            role: 'Co-Founder / CEO',
            imageUrl:
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            dateOfJoining: '2023-01-23T13:23Z',
          });
        props.onChildEvent();

    }
    return (
        <>
            <Transition appear show={props.isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10 w-[30%]" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="md:w-[40%] w-full transform  rounded-2xl bg-[#242526] p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 "
                                    >
                                        Add member
                                    </Dialog.Title>
                                    <div className='mt-10'>
                                        <h3>About</h3>
                                        <div className="mb-6  md:gap-3 ml-4 pr-4">
                                            <div className=''>
                                                <label htmlFor="naem" className="block mb-2 text-sm font-medium ">Name</label>
                                                <input type="text" id="name" className="  bg-[#121213] border border-gray-500  text-sm rounded-lg block p-5 focus:ring-blue-500 w-full " placeholder="name@flowbite.com" required />
                                            </div>
                                            <div className=''>

                                                <label htmlFor="username" className="block mb-2 text-sm font-medium ">User name</label>
                                                <input type="text" id="username" className=" bg-[#121213] border border-gray-500  text-sm rounded-lg block p-5 focus:ring-blue-500  w-full" placeholder="name@flowbite.com" required />
                                            </div>
                                            <div className=''>
                                                <label htmlFor="phone" className="block mb-2 text-sm font-medium ">Phone Number</label>
                                                <input type="tel" id="phone" className="  bg-[#121213] border border-gray-500  text-sm rounded-lg block p-5 focus:ring-blue-500 w-full " placeholder="name@flowbite.com" required />
                                            </div>
                                            <div className=''>

                                                <label htmlFor="password" className="block mb-2 text-sm font-medium ">Email</label>
                                                <input type="email" id="email" className=" bg-[#121213] border border-gray-500  text-sm rounded-lg block p-5 focus:ring-blue-500  w-full" placeholder="name@flowbite.com" required />
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-2 grid-rows-2'>


                                            <div >
                                                <h3 className='mb-3'>Role</h3>
                                                <div className='flex'>

                                                    <div className="flex items-center mr-4">
                                                        <input id="inline-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 " />
                                                        <label htmlFor="inline-radio" className="ml-2 text-sm font-medium  ">Member</label>
                                                    </div>
                                                    <div className="flex items-center mr-4">
                                                        <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 " />
                                                        <label htmlFor="inline-2-radio" className="ml-2 text-sm font-medium  ">Staff</label>
                                                    </div>
                                                </div>

                                            </div>

                                            <div>
                                                <h3 className='mb-3'>Gender</h3>
                                                <div className="flex">

                                                    <div className="flex items-center mr-4">
                                                        <input id="inline-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 " />
                                                        <label htmlFor="inline-radio" className="ml-2 text-sm font-medium  ">Male</label>
                                                    </div>
                                                    <div className="flex items-center mr-4">
                                                        <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 " />
                                                        <label htmlFor="inline-2-radio" className="ml-2 text-sm font-medium  ">Female</label>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4  text-right">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={submitHandler}
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
