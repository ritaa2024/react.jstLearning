import  {  useState } from "react";
import { useFetch } from "../../hooks/useFetch";
function ProductList() {
  // const [products, setProducts] = useState([]);
 

  const [url,setUrl]=useState("http://localhost:3000/product/")
  
  const {data:products} = useFetch(url)
  console.log(products);


  return (
    <section>
    <div className="filter">
   
   <button onClick={()=>setUrl("http://localhost:3000/product/")}>all</button>
   <button  onClick={()=>setUrl("http://localhost:3000/product?in_stock=true")}>In stock</button>
    </div>

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
