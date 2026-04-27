import { createFileRoute, Link } from '@tanstack/react-router'
import { fetchProducts } from '../../api/products'

export const Route = createFileRoute('/products/')({
  loader: async () => {
    return fetchProducts()
  },
  component: Products,
})

function Products() {
  const products = Route.useLoaderData()
  const search = Route.useSearch()

  return (
    <>
      <h2>Products</h2>

      <p>Page: {search.page ?? 1}</p>

      {products.map((p: any) => (
        <div key={p.id}>
          <Link to="/products/$productId" params={{ productId: p.id }}>
            {p.title}
          </Link>
        </div>
      ))}
    </>
  )
}