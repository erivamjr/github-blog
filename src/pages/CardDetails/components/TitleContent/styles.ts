import styled from 'styled-components'

export const TitleContentContainer = styled.div`
  padding: 2rem;
  width: 864px;
  height: 168px;
  margin-top: -6rem;
  background-color: ${({ theme }) => theme['base-profile']};
  border-radius: 0.625rem;
`
export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
export const NavButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.blue};
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
`

export const TitleContentH1 = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme['base-title']};
  margin-top: 1.25rem;
`
export const LinkContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
  gap: 2rem;
`
export const LinkContent = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme['base-span']};
`
