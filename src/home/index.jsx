import Header from '@/components/custom/Header'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className=' '>
   <Header/>
   <div className=" min-h-fit flex flex-col items-center justify-center">
     

      <main className="flex flex-col items-center mt-10 space-y-6">
        <h2 className="text-2xl font-semibold">Create Your Professional Resume</h2>
        <p className="text-center max-w-2xl">
          Use our AI-powered tool to generate a professional resume in minutes. Simply fill in your details,
          and our AI will help you create the perfect resume.
        </p>
        
        <div className="flex space-x-4">
          <Button 
            onClick={() => navigate('/dashbord')} 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
          >
            Create Resume
          </Button>
          <Button 
            onClick={() => navigate('/dashbord')} 
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition duration-300"
          >
            My Resumes
          </Button>
        </div>
      </main>

     
    </div>
  </div>
  )
}

export default Home