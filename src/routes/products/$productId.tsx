import { createFileRoute } from '@tanstack/react-router'
import { fetchProduct } from '../../api/products'

export const Route = createFileRoute('/products/$productId')({
  loader: async ({ params }) => {
    return fetchProduct(params.productId)
  },
  component: ProductDetails,
})

function ProductDetails() {
  const product = Route.useLoaderData()

  return (
    <>
      <h2>{product.title}</h2>
      <p>Price: {product.price}</p>
    </>
  )
}