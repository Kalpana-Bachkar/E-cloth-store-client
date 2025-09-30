import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  let serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";
  useEffect(() => {
    fetch(`${serverUrl}/products`)
    .then(res => {
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      return res.json();
    })
    .then(data => {
      setProducts(data);      // set the data received
      setLoading(false);      // turn off loading
    })
    .catch(err => {
      setError(err.message);  // show error
      setLoading(false);      // turn off loading
    });
}, [serverUrl]);


if (loading) return <p>Loading products...</p>;
if (error) return <p>Error: {error}</p>;


  return (
    <div className="container my-4">
      
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm">
              <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ objectFit: "contain", height: "200px" }}
              />
              </Link>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text flex-grow-1">{product.description}</p>
                <h6 className="mt-auto">${product.price}</h6>
                   <Link to={`/product/${product.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
}

