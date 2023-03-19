import Post from '@/components/blog/post'
import fs from 'fs/promises'
import path from 'path'
import type { Post as PostType } from '@/types'

interface Props {
  data: PostType[]
}

function SSG(props: Props) {
  const { data } = props

  return (
    <>
      <h1 className="text-3xl text-green-400 font-bold">The SSG Page</h1>
      <div className="flex flex-wrap">
        {data.map((item) => (
          <Post key={item.id} post={item} />
        ))}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'mock.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData.toString())

  return {
    props: {
      data: data.shinchanList01,
    },
  }
}

export default SSG
