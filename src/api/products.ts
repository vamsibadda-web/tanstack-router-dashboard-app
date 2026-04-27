export async function fetchProducts() {
  const res = await fetch('https://fakestoreapi.com/products')
  return res.json()
}

export async function fetchProduct(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)
  return res.json()
}