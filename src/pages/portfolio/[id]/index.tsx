import { useRouter } from 'next/router'

function PortfolioProjectPage() {
  const router = useRouter()

  console.log(router.pathname)
  console.log(router.query)

  return (
    <>
      <h1>The PortfolioProjectPage Page</h1>
    </>
  )
}

export default PortfolioProjectPage
