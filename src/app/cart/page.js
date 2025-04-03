// 'use client';
// import { useCart } from '@/components/cart/CartContext';
// import Image from 'next/image';

// export default function CartPage() {
//   const { cart, addToCart, removeFromCart, clearCart, getCartTotal } = useCart();

//   if (cart.length === 0) {
//     return (
//       <div className="container mx-auto px-4 py-8 text-center">
//         <h1 className="text-2xl">Your cart is empty</h1>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
//       <div className="grid gap-6">
//         {cart.map(item => (
//           <div 
//             key={item?.id} 
//             className="flex items-center border-b pb-4 justify-between"
//           >
//             <div className="flex items-center space-x-4">
//               <div className="relative h-24 w-24">
//                 <Image 
//                   src={item?.image} 
//                   alt={item?.title} 
//                   fill 
//                   className="object-contain"
//                 />
//               </div>
//               <div>
//                 <h2 className="font-bold w-72">{item.title}</h2>
//                 <p>${item?.price}</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <button 
//                 onClick={() => removeFromCart(item?.id)}
//                 className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
//               >
//                 -
//               </button>
//               <span>{item.quantity}</span>
//               <button 
//                 onClick={() => addToCart(item)}
//                 className="bg-green-500 text-white px-3 py-1 rounded cursor-pointer"
//               >
//                 +
//               </button>
//             </div>
//             <div>
//               <p className="font-bold">
//                 ${(item?.price * item?.quantity)}
//               </p>
//             </div>
//           </div>
//         ))}
//         <div className="mt-8 text-right">
//           <p className="text-2xl font-bold">
//             Total: ${getCartTotal()}
//           </p>
//           <button 
//             onClick={clearCart}
//             className="mt-4 bg-red-500 text-white px-6 py-2 rounded"
//           >
//             Clear Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }