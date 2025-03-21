import { Card } from "./styles"

export const CardProduct = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <Card>
          <img src={product.image} alt={product.name} />

          <div>
            <p>{product.name}</p>

            <div>
              <p>Cor: {product.color}</p>
              <p>Tamanho: {product.size}</p>
            </div>

            <p>R$ {product.price}</p>
            <button type="button">Adicionar ao carrinho</button>
          </div>
        </Card>
      ))}
    </>
  )
}
