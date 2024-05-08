import styled from 'styled-components'

export const InputContainer = styled.div`
  max-width: 864px;
  margin: 4.5rem auto 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const IntputTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
  color: ${(props) => props.theme['base-subtitle']};

  p {
    align-self: flex-end;
  }
`

export const InputForm = styled.input`
  width: 100%;
  height: 3rem;
  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 0.5rem;
  padding: 0 1rem;
  font-size: 1rem;
  color: ${(props) => props.theme['base-label']};
  margin-bottom: 1rem;
  outline: none;
  transition: 0.3s;
  background: ${(props) => props.theme['base-input']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
