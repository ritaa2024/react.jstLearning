import  {  useState } from "react";
import { useFetch } from "../../Hooks/useFetch";
import Loading from "../assets/loading.gif";
function ProductList() {
  // const [products, setProducts] = useState([]);
 

  const [url,setUrl]=useState("http://localhost:3000/product/")
  
  const {data:products,loading,error} = useFetch(url)
  // console.log(products);
  // console.log(loading,"kkk")



  return (
    <section>
    <div className="filter">
   
   <button onClick={()=>setUrl("http://localhost:3000/product/")}>all</button>
   <button  onClick={()=>setUrl("http://localhost:3000/product?in_stock=true")}>In stock</button>
    </div>
       {loading && <p className="loading"><img src={Loading} alt="" /></p>}
       {error && <p className="error">{error}</p>}
      
        {products && products.map((product)=>(
            <div className="card" key={product.id}>
            <p className="id">{product.id}</p>
            <p className="name">{product.name}</p>
            <p className="info"><span>
          {product.price}
            </span>
          <span className={product.in_stock ? "instock":"unavailable"}>{product.in_stock ? "In Stock":"unavaiable"}</span>  </p>


            </div>
           
        )
           
           
        )}
    </section>
  );
}

export default ProductList;
