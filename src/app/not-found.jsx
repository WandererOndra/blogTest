import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <main className='text-center'>
        <h2 className='text-3xl'>There was a probelm.</h2>
        <p>We could not find the page you were looking for.</p>
        <p>Go back <Link href="/">home</Link></p>
    </main>
  )
}
