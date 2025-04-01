// export async function fetchProducts() {
//     try {
//       const response = await fetch('https://fakestoreapi.com/products');
//       if (!response.ok) {
//         throw new Error('Failed to fetch products');
//       }
//       return response.json();
//     } catch (error) {
//       console.error('Error fetching products:', error);
//       return [];
//     }
//   }
  
//   export async function fetchProductById(id) {
//     try {
//       const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch product');
//       }
//       return response.json();
//     } catch (error) {
//       console.error('Error fetching product:', error);
//       return null;
//     }
//   }