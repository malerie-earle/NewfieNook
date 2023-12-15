import useFetch from "../hooks/useFetch.jsx";
import "../styles/index.css";

const ProductList = () => {
  const { data: products, loading, error } = useFetch('http://localhost:8080/products');

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
    <div className="productListHTML">
      <h2>Product List</h2>
      <br />
      <div className="listedProduct">
        {products.map((product) => (
          <div className="items" id={product.id} key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} className="image" />
            <br />
           
              
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
       {/* <button onClick={()=>{console.log(product)}}>Add to Cart</button> */}
            </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ProductList;
