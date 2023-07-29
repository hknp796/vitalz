import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {


  return (
    <div className="w-[250px] max-w-md">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-[#424345] p-1">
          <Tab className={({ selected }) =>
            classNames(
              'w-full rounded-lg py-2 text-sm font-medium leading-5 text-white',
              selected
                ? 'bg-[#4E4F52] shadow outline-none'
                : 'text-[#9a9b9c] '
            )
          }
          >
            Clients
          </Tab>
          <Tab className={({ selected }) =>
            classNames(
              'w-full rounded-lg py-2 text-sm font-medium leading-5 ',
              selected
                ? 'bg-[#4E4F52] shadow text-white outline-none'
                : 'text-[#9a9b9c] '
            )
          }
          >
            Management
          </Tab>

        </Tab.List>

      </Tab.Group>
    </div>
  )
}
