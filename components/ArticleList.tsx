import ArticleItem from './ArticleItem'
import articleStyles from '../styles/Article.module.css'
import { FunctionComponent } from 'react'
import { ArticleItemType } from './ArticleItem'

interface ArticleListProps {
    articles: ArticleItemType[]
}
 
const ArticleList: FunctionComponent<ArticleListProps> = ({articles}):JSX.Element => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  )
}

export default ArticleList