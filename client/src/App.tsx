import { useEffect, useState } from "react"



function App() {
const [product, setProduct] = useState<{name: string, price: number}[]>([
  { name: 'product1', price: 100.0 },
  { name: 'product2', price: 200.0 }
  ]);


  useEffect(() =>{
      fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setProduct(data))
  }, [])

  const addProduct = () => {
      setProduct(prevState => [...prevState, 
        { name: `product ${prevState.length + 1}`, 
        price: (prevState.length * 100) + 100 }])
  }
  return (
    <>
      <div>
        <h1>Restore</h1>
        <ul>
          {product.map((item, index) => (
            <li key={index}>{item.name} - {item.price}</li>
          ))}
        </ul>
        <button onClick={addProduct}>Add product</button>
      </div>
    </>
  )
}

export default App
