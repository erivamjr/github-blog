import { PostProps } from '../../../../context/PostContext'
import {
  CardContent,
  CardDate,
  CardRef,
  CardText,
  CardTitle,
  StyledLink,
} from './styles'

interface CardProps {
  post: PostProps
}

export function Card({ post }: CardProps) {
  if (!post) {
    return null // Retornar null se post for undefined
  }
  return (
    <>
      <CardContent>
        <CardRef>
          <StyledLink to={`/post/${post.id}`}>
            <CardTitle>{post.title}</CardTitle>
          </StyledLink>
          <CardDate>Há 1 dia</CardDate>
        </CardRef>
        <CardText>{post.body}</CardText>
      </CardContent>
    </>
  )
}
