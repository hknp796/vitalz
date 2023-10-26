import { FaArrowRight, FaCaretRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


export default function Table(props: any) {
    const navigate = useNavigate()
    function selectClient() {
        props.details(props.person.name)
        navigate(`/${props.person.name}`)

    }
    return (
        <div className="px-2">

            <ul role="list" className="divide-y divide-gray-100">
                <li className="grid grid-cols-2 justify-between items-center gap-x-6 py-3 bg-[#242526] text-white  rounded-lg mb-1 p-3 cursor-pointer hover:bg-[#1377FF]" onClick={selectClient}>
                    <div className="flex gap-x-4 items-center">
                        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={props.person.image} alt="" />
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 ">{props.person.name}</p>
                        </div>
                    </div>
                    <div className="hidden sm:flex sm:flex-col  sm:justify-center ">
                        <p className="text-xs leading-5 text-white">Date of Joining : {props.person.birthDate
}</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
