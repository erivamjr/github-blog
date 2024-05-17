import { useContext } from 'react'
import { Card } from './components/Card'
import { Profile } from './components/Profile'
import { Search } from './components/Search'
import { CardContainer } from './styles'
import { PostContext, PostProps } from '../../context/PostContext'

export function Blog() {
  const { posts } = useContext(PostContext)
  console.log(posts)

  return (
    <div>
      <Profile />
      <Search />

      <CardContainer>
        {posts.map((post: PostProps) => {
          return <Card key={post.id} post={post} />
        })}
      </CardContainer>
    </div>
  )
}
