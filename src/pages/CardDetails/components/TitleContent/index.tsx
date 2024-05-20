import { PostProps } from '../../../../context/PostContext'
import {
  LinkContainer,
  LinkContent,
  NavButton,
  NavContent,
  TitleContentContainer,
  TitleContentH1,
} from './styles'

interface CardProps {
  post?: PostProps
}

export const TitleContent = ({ post }: CardProps) => {
  if (!post) {
    return null // Retornar null se post for undefined
  }
  return (
    <TitleContentContainer>
      <NavContent>
        <NavButton>VOLTAR</NavButton>
        <NavButton>VER NO GITHUB</NavButton>
      </NavContent>
      <TitleContentH1>{post.title}</TitleContentH1>
      <LinkContainer>
        <LinkContent>{post.user.login}</LinkContent>
        <LinkContent>{post.created_at}</LinkContent>
        <LinkContent>{post.comments} comentários</LinkContent>
      </LinkContainer>
    </TitleContentContainer>
  )
}
