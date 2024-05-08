import { InputContainer, InputForm, IntputTitle } from './styles'

export const Search = () => {
  return (
    <InputContainer>
      <IntputTitle>
        <h2>Publicações</h2>
        <p>6 publicações</p>
      </IntputTitle>
      <InputForm placeholder="Buscar conteúdo" />
    </InputContainer>
  )
}
