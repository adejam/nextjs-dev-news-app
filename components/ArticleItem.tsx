import articleStyles from '../styles/Article.module.css'
import Link from 'next/link'
import { FunctionComponent } from 'react'

export type ArticleItemType = {
  id:  string,
  title: string,
  excerpt: string
}

interface ArticleItemProps {
  article: ArticleItemType
}
 
const ArticleItem: FunctionComponent<ArticleItemProps> = ({article:{id, title, excerpt}}):JSX.Element => {
  return (
    <Link href={`/article/${id}`}>
      <a className={articleStyles.card}>
        <h3>{title} &rarr;</h3>
        <p>{excerpt}</p>
      </a>
    </Link>
  )
}

export default ArticleItem