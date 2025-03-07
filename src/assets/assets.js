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
            navItem:"the journal",
            routeName:"journal"
        },
        {
            id:2,
            navItem:"author guidelines",
            routeName:"author-guidelines"
        },
        {
            id:3,
            navItem:"submission & review process",
            routeName:"submission-and-review-process"
        },
        {
            id:4,
            navItem:"current & past issues",
            routeName:"current-and-past-issues"
        },
        {
            id:5,
            navItem:"research ethics and policies",
            routeName:"research-ethics-and-policies"
        },
        {
            id:6,
            navItem:"indexing and abstracting",
            routeName:"indexing-and-abstracting"
        },
        {
            id:7,
            navItem:"reviewer guidelines",
            routeName:"reviewer-guidelines"
        }
    ],
    thirdSet:[
        {
            id:1,
            navItem:"Editorial Board",
            routeName:"editorial-board"
        },
        {
            id:2,
            navItem:"Call For Papers",
            routeName:"call-for-papers"
        },
        {
            id:3,
            navItem:"Contact Us",
            routeName:"contact-us"
        },
        {
            id:4,
            navItem:"FAQ's",
            routeName:"faqs"
        }
    ]
}


export {logo,logowhite,FaRegCircleUser,FaChevronDown,HiOutlineMenu,IoClose}