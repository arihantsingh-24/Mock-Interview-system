import { isAuthenticated } from '@/lib/actions/auth.action'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

const Rootlayout =async ({children}:{children : ReactNode}) => {
  const isUserAuthenticated = await isAuthenticated();
  if(!isUserAuthenticated) redirect('/sign-in')
  return (
    <div className='root-layout'>
      <nav className='flex items-center gap-2'>
        <Link href="/" className='flex items-center gap-2'/>
        <Image src="/logo.svg" alt="logo" width={32} height={38}/>
        <h2 className='text-primary-100'>Prepwise</h2>
      </nav>
      {children}
    </div>
  )
}

export default Rootlayout