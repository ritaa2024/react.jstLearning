import  { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);
console.log(products);

  useEffect(() => {
    fetch("http://localhost:3000/product/")
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <section>
   
        {products.map((product)=>(
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
