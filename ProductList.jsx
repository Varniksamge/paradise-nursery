import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

function ProductList() {
  const dispatch = useDispatch();

  // Comprehensive list of categorized plants with required properties
  const products = [
    { id: 1, name: "Snake Plant", price: 499, category: "Air Purifying", info: "Thrives on neglect and filters indoor air efficiently." },
    { id: 2, name: "Spider Plant", price: 299, category: "Air Purifying", info: "Produces lovely baby plantlets and is completely pet-safe." },
    { id: 3, name: "Peace Lily", price: 599, category: "Indoor Flowering", info: "Features elegant white blooms and thrives in medium to low light." },
    { id: 4, name: "Boston Fern", price: 349, category: "Lush Greenery", info: "Feathery fronds that love high humidity environments." },
    { id: 5, name: "Aloe Vera", price: 199, category: "Succulents & Cacti", info: "A succulent known for its soothing medicinal gel." },
    { id: 6, name: "Monstera Deliciosa", price: 899, category: "Lush Greenery", info: "Famous iconic split leaves that bring a bold tropical vibe." }
  ];

  return (
    <div className="product-list" style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Our Plants</h2>

      {/* Grid container layout for cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {products.map((product) => (
          <div 
            className="product-card" 
            key={product.id} 
            style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#666', fontWeight: 'bold' }}>
                {product.category}
              </span>
              <h3 style={{ margin: '10px 0 5px 0' }}>{product.name}</h3>
              <p style={{ fontSize: '0.9rem', color: '#555' }}>{product.info}</p>
            </div>
            
            <div>
              <p style={{ fontWeight: 'bold', fontSize: '1.2rem', margin: '15px 0' }}>₹{product.price}</p>
              <button 
                onClick={() => dispatch(addItem(product))}
                style={{ width: '100%', padding: '10px', backgroundColor: '#2e7d32', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
