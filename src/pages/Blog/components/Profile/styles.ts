import styled from 'styled-components'

export const ProfileContainer = styled.div`
  height: 212px;
  width: 864px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
  margin: -6rem auto 0 auto;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 0.625rem;
`

export const ProfileImg = styled.div`
  width: 148px;
  height: 148px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
  }
`

export const ProfileContent = styled.div`
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
`

export const NameProfile = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
`

export const DescriptionProfile = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin-top: 1rem;
  color: ${(props) => props.theme['text-profile']};
`

export const TagsProfile = styled.div`
  display: flex;
  margin-top: 1rem;
  p {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['text-profile']};
    margin-right: 1rem;
  }
`

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`
export const GitLink = styled.a`
  display: flex;
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme['base-span']};
  text-decoration: none;
  align-self: start;
  margin-top: 1rem;
`
