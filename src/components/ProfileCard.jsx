'use client';

import { Card, Dropdown, } from 'flowbite-react';


export default function UserProfileCard() {
  return (
    <Card className='w-[20%] '>
      <div className="flex justify-end px-4 pt-4 text-black">
        <Dropdown
          inline
          label=""
        >
          <div>
            <a
              className="block px-4 py-2 text-sm text-gray-700 "
              href="#"
            >
              <p>
                Edit
              </p>
            </a>
          </div>
          <div>
            <a
              className="block px-4 py-2 text-sm text-gray-700 "
              href="#"
            >
              <p>
                Export Data
              </p>
            </a>
          </div>
          <div>
            <a
              className="block px-4 py-2 text-sm text-red-600 "
              href="#"
            >
              <p>
                Delete
              </p>
            </a>
          </div>
        </Dropdown>
      </div>
      <div className="flex flex-col items-center d pb-10">
        <img 
          alt="Bonnie image"
          className="mb-3 rounded-full shadow-lg"
          height="96"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          width="96"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Bonnie Green
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Visual Designer
        </span>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <a
            className="inline-flex d rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white "
            href="#"
          >
            <p>
              Email
            </p>
          </a>
          <a
            className="inline-flex d rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 "
            href="#"
          >
            <p>
              Text
            </p>
          </a>
        </div>
      </div>
    </Card>
  )
}


