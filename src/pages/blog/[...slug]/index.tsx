import { useRouter } from 'next/router'

function BlogPage() {
  const router = useRouter()

  console.log(router.pathname)
  console.log(router.query)

  return (
    <>
      <h1>The Catch All Path Params BlogPage Page</h1>
    </>
  )
}

export default BlogPage
