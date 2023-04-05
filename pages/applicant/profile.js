import ProfileDetails from '@/components/Applicant/profile-details'
import ProfileOverview from '@/components/Applicant/profile-overview'
import { useStateContext } from '@/components/Context/StateContext'
import React from 'react'

const Profile = () => {
  const {expanded} = useStateContext()
  return (
    <div className='md:flex gap-4 m-8 min-h-full transition-all flex-grow-1'>
        <div className={`bg-slate-50 rounded p-4 w-full ${expanded ? 'md:w-2/5' : 'md:w-1/4'}`} >
            <ProfileDetails />
        </div>
        <div className={`bg-slate-50 rounded-md mt-4 md:mt-0 p-4 w-full ${expanded ? 'md:w-3/5' : 'md:w-3/4'}`}>
            <ProfileOverview />
        </div>
    </div>
  )
}

export default Profile