import { CaretLeft } from "phosphor-react-native";
import { BackIcon, BackButton, Container, Logo } from "./styles";

import logoImg from '@assets/logo.png'

interface HeaderProps {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <Container>

    {showBackButton &&
      <BackButton>
        <BackIcon />
      </BackButton>}
      
      <Logo source={logoImg} />
    </Container>
  )
}