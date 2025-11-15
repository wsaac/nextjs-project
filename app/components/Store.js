'use client';
import { useState, useEffect } from 'react';

export default function ProductStore() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
      <h2>Product Store</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px'
        }}
      />
      
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f5f5f5' }}>
                <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Image</th>
                <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Title</th>
                <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Price</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                    <img 
                      src={product.image} 
                      alt={product.title}
                      style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                    />
                  </td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{product.title}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>${product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredProducts.length === 0 && searchTerm && (
            <p style={{ textAlign: 'center', padding: '20px' }}>
              No products found matching "{searchTerm}"
            </p>
          )}
        </div>
      )}
    </div>
  );
}