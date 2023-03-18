import Image from 'next/image'
import { useRouter } from 'next/router'

type Post = {
  id: number
  title: string
  description: string
  date: string
  image: string
}

interface Props {
  post: Post
}

function Post({ post }: Props) {
  const router = useRouter()

  function clickHandler(id: number) {
    router.push({
      pathname: '/blog/[id]',
      query: { id },
    })
  }

  return (
    <>
      <div
        className="border max-w-[300px] rounded-2xl mr-5 p-4 cursor-pointer"
        onClick={() => clickHandler(post.id)}
      >
        <Image
          className="rounded-2xl"
          src={post.image}
          alt="Picture of the author"
          width={300}
          height={200}
          priority
        />
        <div>{post.date}</div>
        <div>{post.title}</div>
        <div>{post.description}</div>
      </div>
    </>
  )
}

export default Post
