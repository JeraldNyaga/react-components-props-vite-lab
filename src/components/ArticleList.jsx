import Article from "./Article"
import styles from "./styles/ArticleList.module.css"

export default function ArticleList({dataPosts}) {

  return (

    <div className={styles.posts_container}>
        {
            dataPosts.map(
                post=>{
                    return <Article key={post.id}  post={post}/>
                }
            )
        }
    </div>
  )
}
