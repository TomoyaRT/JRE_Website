import Post from '@/components/blog/post'
import fs from 'fs/promises'
import path from 'path'

type PostType = {
  id: number
  title: string
  description: string
  date: string
  image: string
}

interface Props {
  posts: PostType[]
}

function Blog(props: Props) {
  const { posts } = props

  return (
    <>
      <h1 className="text-[48px] text-blue-500">The Blog Page</h1>
      <div className="flex flex-wrap">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}

export async function getStaticProps() {
  console.log('(re) generating...')
  const filePath = path.join(process.cwd(), 'data', 'mock.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData.toString())

  return {
    props: {
      posts: data.posts,
    },
    revalidate: 5,
  }
}

export default Blog
