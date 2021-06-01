import * as S from './styles'

const Main = ({
  title = 'Nextjs boilerplate',
  description = 'Typescript, ReactJS, NextJS and Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="React avancado" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="developer in front of a computer"
    />
  </S.Wrapper>
)

export default Main
