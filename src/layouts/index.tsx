import Navbar from '@/layouts/navbar'
import { PropsWithChildren } from 'react'
import { mainNavigation, nextjsDemoNavigation } from '@/constants/routes'
import { useRouter } from 'next/router'

function Layout(props: PropsWithChildren) {
  const router = useRouter()
  const isNextjsDemo = router.pathname.includes('nextjs-demo')
  const routes = isNextjsDemo ? nextjsDemoNavigation : mainNavigation

  return (
    <>
      <Navbar routes={routes} />
      {props.children}
    </>
  )
}

export default Layout
