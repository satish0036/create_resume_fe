import React, { useEffect, useState } from 'react'
import AddResume from './components/AddResume'
import { useUser } from '@clerk/clerk-react'
import GlobalApi from '@/serverAction/GlobalApi';
import ResumeCardItem from './components/ResumeCardItem';

const Dashbord = () => {
  const { user } = useUser();
  const [resumeList, setResumeList] = useState([])
  useEffect(() => {
    user && GetResumeList()
  }, [user])
  const GetResumeList = () => {
    const data = {
      userEmail: user?.primaryEmailAddress?.emailAddress
    }

    
    GlobalApi.GetUserResumes(data).then((res) => {
      console.log(res.data.message)
      setResumeList(res.data.data)
    }, (err) => {
      console.log(err)
    })
  }


 
  return (
    <div className=' p-10  md:px-20 lg:px-32'>

      <h2 className=' font-bold text-2xl' >My Resume</h2>
      <p>Start creating resume</p>
      <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-5'>
        <AddResume />
        {resumeList.length > 0 && resumeList.map((resume, index) => (
          <ResumeCardItem resume={resume} key={index} refreshData={GetResumeList} />
        ))}
      </div>
    </div>
  )
}

export default Dashbord