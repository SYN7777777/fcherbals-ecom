import HerbalBanner from "../components/Banner/HeroBanner"
import ProductList from "../components/Products/ProductsList"
import Testimonials from "../components/Testimonials"

const Home = () => {
  return (
    <div>
        <HerbalBanner/>
        <ProductList/>
          <div className="mt-20">
        <Testimonials/>
    
        </div>


    </div>
  )
}

export default Home