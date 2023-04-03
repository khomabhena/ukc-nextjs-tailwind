import { BsFillPersonFill } from "react-icons/bs"
import { FaPills } from "react-icons/fa"
import {TfiWrite } from "react-icons/tfi"
import { MdUpdate } from "react-icons/md"
import { FaGraduationCap } from "react-icons/fa"
import { FaUserNurse } from "react-icons/fa"

export const applicantMenu = [
    {
        name: 'Profile',
        icon: <BsFillPersonFill />,
        link: ''
    },
    {
        name: 'Jobs',
        icon: <FaPills />,
        link: ''
    },
    {
        name: 'Applications',
        icon: <TfiWrite />,
        link: ''
    },
    {
        name: 'Update',
        icon: <MdUpdate />,
        link: ''
    },
    {
        name: 'Qualifications',
        icon: <FaGraduationCap />,
        link: ''
    },
    {
        name: 'Experience',
        icon: <FaUserNurse />,
        link: ''
    },
]