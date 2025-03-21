import { Container } from "../../styles/globals"
import { HeaderContainer } from "./styles"

import Logo from '../../assets/logo.png'
import IconCart from '../../assets/icon-cart.png'

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Sobre", to: "/sobre" },
  { name: "Produtos", to: "/produtos" },
  { name: "Perguntas frequêntes", to: "/perguntas-frequentes" },
  { name: "Fale conosco", to: "/fale-conosco" },
]

export const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <div>
          <a href="/">
            <img src={Logo} alt="Logo da empresa Dev em Dobro" />
          </a>

          <nav>
            <ul>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.to}>{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <a>Entrar ou cadastrar-se</a>
            <a>
              <img src={IconCart} alt="Ícone do carrinho de compras" />
            </a>
          </div>
        </div>
      </Container>
    </HeaderContainer>
  )
}
