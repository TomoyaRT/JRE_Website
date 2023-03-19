import Image from 'next/image'
import fs from 'fs/promises'
import path from 'path'
import type { Post as PostType } from '@/types'
import type { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

interface Props {
  post: PostType
}

function SSGPage(props: Props) {
  const { post } = props

  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      {post && (
        <div className="border max-w-[300px] rounded-2xl mr-5 p-4 cursor-pointer">
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
      )}
    </>
  )
}

async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'mock.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData.toString())

  return data
}

export async function getStaticPaths() {
  const data = await getData()
  const ids = data.shinchanList01.map((post: PostType) => post.id)
  const pathsWithParams = ids.map((id: number) => ({
    params: { id: String(id) },
  }))

  return {
    paths: pathsWithParams,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  const id = Number(params?.id)
  const data = await getData()
  const posts = data.shinchanList01

  const post = posts.find((post: PostType) => post.id === id)
  if (!post) return { notFound: true }

  return {
    props: {
      post,
    },
  }
}

export default SSGPage
