import logo from './images/smerlogo.png'
import logowhite from './images/smerlogo(white).png'
import { FaRegCircleUser,FaChevronDown  } from "react-icons/fa6";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

//Nav Items
export const navItems={
    firstSet:"Home",
    secondSet:[
        {
            id:1,
            navItem:"the journal"
        },
        {
            id:2,
            navItem:"author guidelines"
        },
        {
            id:3,
            navItem:"submission & review process"
        },
        {
            id:4,
            navItem:"current & past issues"
        },
        {
            id:5,
            navItem:"research ethics and policies"
        },
        {
            id:6,
            navItem:"indexing and abstracting"
        },
        {
            id:7,
            navItem:"reviewer guidelines"
        }
    ],
    thirdSet:[
        {
            id:1,
            navItem:"Editorial Board"
        },
        {
            id:2,
            navItem:"Call For Papers"
        },
        {
            id:3,
            navItem:"Contact Us"
        },
        {
            id:4,
            navItem:"FAQ's"
        }
    ]
}


export {logo,logowhite,FaRegCircleUser,FaChevronDown,HiOutlineMenu,IoClose}