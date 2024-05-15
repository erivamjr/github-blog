import {
  LinkContainer,
  LinkContent,
  NavButton,
  NavContent,
  TitleContentContainer,
  TitleContentH1,
} from './styles'

export const TitleContent = () => {
  return (
    <TitleContentContainer>
      <NavContent>
        <NavButton>VOLTAR</NavButton>
        <NavButton>VER NO GITHUB</NavButton>
      </NavContent>
      <TitleContentH1>JavaScript data types and data structures</TitleContentH1>
      <LinkContainer>
        <LinkContent>cameronwll</LinkContent>
        <LinkContent>Há 1 dia</LinkContent>
        <LinkContent>5 comentários</LinkContent>
      </LinkContainer>
    </TitleContentContainer>
  )
}
