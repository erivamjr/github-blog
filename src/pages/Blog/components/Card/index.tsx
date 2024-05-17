import { PostProps } from '../../../../context/PostContext'
import { CardContent, CardDate, CardRef, CardText, CardTitle } from './styles'

interface CardProps {
  post: PostProps
}

export function Card({ post }: CardProps) {
  return (
    <>
      <CardContent>
        <CardRef>
          <CardTitle>{post.title}</CardTitle>
          <CardDate>Há 1 dia</CardDate>
        </CardRef>
        <CardText>{post.body}</CardText>
      </CardContent>
    </>
  )
}
