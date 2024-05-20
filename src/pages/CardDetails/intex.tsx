import { useParams } from 'react-router-dom'
import { TitleContent } from './components/TitleContent'
import { CardContent, CardDetailsContainer } from './styles'
import { useContext } from 'react'
import { PostContext } from '../../context/PostContext'

export function CardDetails() {
  const { id } = useParams()
  const { posts } = useContext(PostContext)
  const post = posts.find((post) => post.id === Number(id))
  if (!post) {
    return null
  }
  return (
    <CardDetailsContainer>
      <TitleContent post={post} />
      <CardContent>{post.body}</CardContent>
    </CardDetailsContainer>
  )
}
