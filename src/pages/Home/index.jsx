import { CardProduct } from "../../components/CardProduct";
import { Container } from "../../styles/globals"

import { products } from "../../mocks"
import { SectionProducts } from "./styles"

export const Home = () => {
  return (
    <Container>
      <SectionProducts>
        <h1>Produtos</h1>
        <CardProduct products={products} />
      </SectionProducts>
    </Container>
  )
}
