import { useContext } from 'react'
import { PostContext } from '../../../../context/PostContext'
import {
  DescriptionProfile,
  NameProfile,
  TagsProfile,
  ProfileContainer,
  ProfileContent,
  ProfileImg,
  NameContainer,
  GitLink,
} from './styles'

export function Profile() {
  const { user } = useContext(PostContext)
  return (
    <ProfileContainer>
      <NameContainer>
        <ProfileImg>
          <img src={user.avatar_url} alt="Profile" />
        </ProfileImg>
        <ProfileContent>
          <NameProfile>{user.name}</NameProfile>

          <DescriptionProfile>{user.bio}</DescriptionProfile>
          <TagsProfile>
            <p>{user.login}</p>
            <p>{user.company}</p>
            <p>{user.followers}</p>
          </TagsProfile>
        </ProfileContent>
      </NameContainer>
      <GitLink>GITHUB</GitLink>
    </ProfileContainer>
  )
}
