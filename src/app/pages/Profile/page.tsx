'use client'
import { useUser } from '@/app/store/UserProvider/page';
import React from 'react'

const page = () => {
  const { user } = useUser();

  return (
    <div>
      {user?.name}
      This is your porfile
    </div>
  )
}

export default page
