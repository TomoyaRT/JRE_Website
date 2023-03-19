import { GetServerSideProps } from 'next'

type Props = {
  username: string
}

function SSR(props: Props) {
  return (
    <div className="text-3xl text-blue-400 font-bold">{props.username}</div>
  )
}

export default SSR

export const getServerSideProps: GetServerSideProps = async () => {
  console.log('server side static')

  return {
    props: {
      username: 'Roger',
    },
  }
}
