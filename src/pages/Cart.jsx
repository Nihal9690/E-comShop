import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { IoBagOutline } from "react-icons/io5";

const Cart = () => {
  const { cartItem, removeCart, memo, handleIncrement, handleDecrement } = useContext(UserContext);

  return (
    <div className="container mx-auto p-4 lg:p-6 pb-28">
      {cartItem.length > 0 ? (
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="max-h-[500px] overflow-auto">
            <table className="w-full border border-gray-200 text-center text-sm">
              <thead className="bg-gray-100 text-gray-700 uppercase">
                <tr>
                  <th className="px-4 py-3">Sno</th>
                  <th className="px-4 py-3">Product</th>
                  <th className="px-4 py-3 hidden md:table-cell">Price</th>
                  <th className="px-4 py-3">Quantity</th>
                  <th className="px-4 py-3">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItem.map((item, i) => (
                  <tr key={i} className="border-b border-gray-300 hover:bg-gray-50 transition duration-300">
                    <td className="px-4 py-4 font-semibold text-gray-700">{i + 1}</td>
                    <td className="px-4 py-4 flex items-center gap-4">
                      <img src={item.thumbnail} className="w-16 h-16 object-cover rounded-md shadow-md" alt={item.name} />
                      <span className="text-gray-800 font-medium">{item.name}</span>
                    </td>
                    <td className="px-4 py-4 text-lg font-semibold text-gray-800 hidden md:table-cell">
                      ${(item.price.toFixed(2))}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-center space-x-2">
                        <button
                          onClick={() => handleIncrement(i)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-l shadow-md transition-transform transform active:scale-95"
                        >
                          +
                        </button>
                        <span className="text-lg font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => handleDecrement(i)}
                          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-r shadow-md transition-transform transform active:scale-95"
                        >
                          -
                        </button>
                      </div>
                    </td>
                    <td>
                      <button
                        onClick={() => removeCart(i)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded shadow-md transition-transform transform active:scale-95"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sticky Total Footer */}
          <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 flex justify-between items-center border-t border-gray-200">
            <h1 className="text-lg font-bold text-gray-900">
              Total: <span className="text-green-600">${memo.toFixed(2)}</span>
            </h1>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-transform transform active:scale-95">
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen text-3xl font-bold text-gray-700 gap-2">
          <IoBagOutline className="text-5xl text-gray-500" />
          Cart is empty
        </div>
      )}
    </div>
  );
};

export default Cart;
