import Navbar from '@/layouts/navbar'
import { PropsWithChildren } from 'react'

function Layout(props: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  )
}

export default Layout
