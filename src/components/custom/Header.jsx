import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

const Header = () => {
  const { user, isSignedIn } = useUser()
  return (
    <div className=' p-3 px-5 flex justify-between shadow-md'>
      <img src='/logo.svg' alt='logo' />
      {
        isSignedIn ?
          <div className=' flex justify-center items-center gap-3'>
             <Link to={"/dashbord"} >
            <Button variant="outline">Dashbord</Button>
            </Link>
            <UserButton />
          </div>
          :
          <Link to={"/auth/sign-in"} >
            <Button>Get Started</Button>
          </Link>
      }

    </div>
  )
}

export default Header