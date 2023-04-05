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
        link: '/applicant/profile'
    },
    {
        name: 'Jobs',
        icon: <FaPills />,
        link: '/applicant/jobs'
    },
    {
        name: 'Applications',
        icon: <TfiWrite />,
        link: '/applicant/applications'
    },
    {
        name: 'Update',
        icon: <MdUpdate />,
        link: '/applicant/update'
    },
    {
        name: 'Qualifications',
        icon: <FaGraduationCap />,
        link: '/applicant/qualifications'
    },
    {
        name: 'Experience',
        icon: <FaUserNurse />,
        link: '/applicant/experience'
    },
]