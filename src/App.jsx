import Navbar from "./components/Navbar"
import ProductsList from "./components/ProductsList"

function App() {
  return (
    <div className="mx-auto px-5 max-w-[1200px]">
      <Navbar/>
      <ProductsList/>
    </div>
  )
}

export default App