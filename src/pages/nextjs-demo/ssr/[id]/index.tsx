import { GetServerSideProps } from 'next'

interface Props {
  id: string
}

function SSRPage(props: Props) {
  return <h1>{props.id}</h1>
}

export default SSRPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log('server side dynamic')
  const { params } = context
  const id = params?.id

  return {
    props: {
      id: 'user-id' + id,
    },
  }
}
