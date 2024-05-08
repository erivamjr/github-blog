import { HeaderContainer, HeaderContent } from './styles'
import logoImg from '../../assets/logo.svg'
import effectLeftImg from '../../assets/effect-left.svg'
import effectRightImg from '../../assets/effect-right.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={effectLeftImg} alt="" />
        <img src={logoImg} alt="" />
        <img src={effectRightImg} alt="" />
      </HeaderContent>
    </HeaderContainer>
  )
}
