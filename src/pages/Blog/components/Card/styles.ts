import { Link } from 'react-router-dom'
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
  align-items: center;
  gap: 1rem;
`

export const CardTitle = styled.h1`
  color: ${({ theme }) => theme['base-title']};
  font-size: 1.25rem;
  text-decoration: none;
`

export const CardDate = styled.p`
  display: flex;
  color: ${({ theme }) => theme['base-span']};
  font-size: 0.875rem;
  width: 150px;
  align-self: flex-start;
`

export const CardText = styled.p`
  color: ${({ theme }) => theme['base-text']};
  margin-top: 1.25rem;
  font-size: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  white-space: normal;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
`
