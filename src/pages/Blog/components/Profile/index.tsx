import { DescriptionProfile, NameProfile,TagsProfile, ProfileContainer, ProfileContent, ProfileImg } from "./styles"

export const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileImg>
        <img src={''} alt="Profile" />
      </ProfileImg>
      <ProfileContent>
        <NameProfile>John Doe</NameProfile>

        <DescriptionProfile>
          Lorem iDescriptionProfilesum dolor sit amet, consectetur adipiscing elit. 
          Etiam nec odio vestibulum, rhoncus nisi sit amet, 
          ultrices lacus. Nam eget purus nec nunc.
        </DescriptionProfile>
        <TagsProfile>
          <p>nickname</p>
          <p>Business</p>
          <p>folows</p>
        </TagsProfile>
      </ProfileContent>
    </ProfileContainer>
  )
}