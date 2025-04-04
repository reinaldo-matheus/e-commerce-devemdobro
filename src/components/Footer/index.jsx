import { Container } from "../../styles/globals"
import { FooterContainer } from "./styles"


const navLinks = [
    { name: "Home", to: "/" },
    { name: "Sobre", to: "/sobre" },
    { name: "Produtos", to: "/produtos" },
    { name: "Perguntas frequêntes", to: "/perguntas-frequentes" },
    { name: "Fale conosco", to: "/fale-conosco" },
]

const navHelpLinks = [
    { name: "Troca e devoluções", to: "/troca-devolucao" },
    { name: "Termos e condições", to: "/termos-e-condicoes" },
    { name: "Política de privacidade", to: "/politica-de-privacidade" },
    { name: "Padrão de qualidade", to: "/padrao-de-qualidade" }, ,
]


export const Footer = () => {
    return (
        <FooterContainer>
            <Container>
                <footer>
                    <nav>
                        <h3>Institucional</h3>
                        <ul>
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.to}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav>
                        <h3>Ajuda</h3>
                        <ul>
                            {navHelpLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.to}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav>
                        <address>
                            <h3>Endereço</h3>
                            <p>Rua Vale do Silício, 321</p>
                            <p>São Francisco, Califórnia</p>
                            <p>Estados Unidos da América</p>
                            <p>(34) 1234 5678</p>
                            <p><a href="#">vendas@ecommercedd.com</a></p>
                        </address>
                    </nav>
                </footer>

            </Container>
        </FooterContainer>
    )

}