import styled from 'styled-components'

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border: none;
  border-radius: 0.625rem;
  width: 416px;
  height: 260px;
  background: ${({ theme }) => theme['base-post']};
`

export const CardRef = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const CardTitle = styled.h1`
  color: ${({ theme }) => theme['base-title']};
  font-size: 1.25rem;
`

export const CardDate = styled.p`
  color: ${({ theme }) => theme['base-span']};
  font-size: 0.875rem;
`

export const CardText = styled.p`
  color: ${({ theme }) => theme['base-text']};
  margin-top: 1.25rem;
`
