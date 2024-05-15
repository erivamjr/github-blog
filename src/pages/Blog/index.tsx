import { Card } from './components/Card'
import { Profile } from './components/Profile'
import { Search } from './components/Search'
import { CardContainer } from './styles'

export const Blog = () => {
  return (
    <div>
      <Profile />
      <Search />
      <CardContainer>
        <Card />
      </CardContainer>
    </div>
  )
}
