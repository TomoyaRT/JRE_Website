import Image from 'next/image'
import { useRouter } from 'next/router'
import type { Post as PostType } from '@/types'

interface Props {
  post: PostType
}

function Post({ post }: Props) {
  const router = useRouter()

  function clickHandler(id: number) {
    router.push({
      pathname: post.path,
      query: { id },
    })
  }

  return (
    <>
      <div
        className="border max-w-[300px] rounded-2xl mr-5 mb-5 p-4 cursor-pointer"
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
