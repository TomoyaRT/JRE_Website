import { useRouter } from 'next/router'
import db from '../../../../db.json'
import Image from 'next/image'

function BlogPage() {
  const router = useRouter()
  const id = Number(router.query.id)
  const posts = db.posts
  const data = posts.find((i) => i.id === id)

  return (
    <>
      {data && (
        <div className="border max-w-[300px] rounded-2xl mr-5 p-4 cursor-pointer">
          <Image
            className="rounded-2xl"
            src="/react.png"
            alt="Picture of the author"
            width={300}
            height={200}
            priority
          />
          <div>{data.date}</div>
          <div>{data.title}</div>
          <div>{data.description}</div>
        </div>
      )}
    </>
  )
}

export default BlogPage
