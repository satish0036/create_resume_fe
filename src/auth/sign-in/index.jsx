import { SignIn as SignP,SignInButton } from '@clerk/clerk-react'
import React from 'react'

const SignIn = () => {
  return (
    <div className=' flex justify-center items-center h-screen'>
  <SignP/>
    </div>
  )
}

export default SignIn