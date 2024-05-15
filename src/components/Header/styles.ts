import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['base-profile']};
  color: #fff;
  padding: 10px;
`
export const HeaderContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  height: 18.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img:nth-child(2) {
    margin-bottom: 8rem;
  }
`
