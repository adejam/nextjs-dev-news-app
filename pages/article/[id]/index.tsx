import { server } from '../../../config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Meta from '../../../components/Meta'
import { GetStaticProps, GetStaticPaths } from 'next'

export type ArticleItemType = {
    id: string,
    title: string,
    excerpt: string,
    body: string
  }
  
  interface ArticleItemProps {
    article: ArticleItemType
  }
   
const article = ({article:{title, body, excerpt}}: ArticleItemProps) => {
  // const router = useRouter()
  // const { id } = router.query

  return (
    <>
      <Meta title={title} description={excerpt} />
      <h1>{title}</h1>
      <p>{body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context: any) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   )

  const res = await fetch(`${server}/api/articles/${context.params.id}`,
  {
    method: 'GET',
    headers: {
      'User-Agent':
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36',
      Accept: 'application/json; charset=UTF-8',
    },
  })

  const article = await res.json()

  return {
    props: {
      article,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const res = await fetch(`${server}/api/articles`,
  {
    method: 'GET',
    headers: {
      'User-Agent':
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36',
      Accept: 'application/json; charset=UTF-8',
    },
  })

  const articles = await res.json()

  const ids = articles.map((article: ArticleItemType) => article.id)
  const paths = ids.map((id: any) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

export default article