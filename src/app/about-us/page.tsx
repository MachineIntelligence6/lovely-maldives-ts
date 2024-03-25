'use client'

import { Box } from '@mui/system'
// import { Button } from '@mui/material'
import { signIn } from 'next-auth/react'
import { auth } from '@/config/auth'

async function AboutUsPage() {
  const session = await auth()
  return (
    <div>
      About us.
      {session?.user ? (
        <>Welcome {session?.user?.name}</>
      ) : (
        <Box>
          <button
            type="button"
            onClick={() =>
              signIn('Credentials', {
                email: 'jsmith@example.com',
                password: 'asdasd',
              })
            }
          >
            Login
          </button>
        </Box>
      )}
    </div>
  )
}

export default AboutUsPage
