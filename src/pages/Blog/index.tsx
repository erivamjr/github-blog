import { Header } from '../../components/Header'
import { Card } from './components/Card'
import { Profile } from './components/Profile'
import { Search } from './components/Search'
import { CardContainer } from './styles'

export const Blog = () => {
  return (
    <div>
      <Header />
      <Profile />
      <Search />
      <CardContainer>
        <Card />
      </CardContainer>
    </div>
  )
}
