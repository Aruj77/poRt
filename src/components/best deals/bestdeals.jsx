import React from "react";

const laptops = [
  {
    id: 1,
    name: "Example Laptop 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "₹10,999",
    image: "https://images.unsplash.com/photo-1491472253230-a044054ca35f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",
    verified: true, // Add a property to indicate if the laptop is verified
  },
  {
    id: 2,
    name: "Example Laptop 2",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "₹10,199",
    image: "https://images.unsplash.com/photo-1491472253230-a044054ca35f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",
    verified: false,
  },
  {
    id: 3,
    name: "Example Laptop 3",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: "₹10,899",
    image: "https://images.unsplash.com/photo-1491472253230-a044054ca35f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",
    verified: true,
  },
];

function BestDeals() {
  return (
    <div className="container mx-auto mt-8 mb-8">
      <h2 className="text-3xl font-bold mb-4">Best Deals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {laptops.map((laptop) => (
          <div
            key={laptop.id}
            className="relative bg-card shadow-lg rounded-lg overflow-hidden"
          >
            {laptop.verified && (
              <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-md text-xs font-bold">
                poRt Verified
              </div>
            )}
            <img
              src={laptop.image}
              alt={laptop.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-card">
              <h3 className="text-xl font-bold mb-2 bg-transparent">
                {laptop.name}
              </h3>
              <p className="text-gray-500 text-base bg-transparent">
                {laptop.description}
              </p>
              <div className="mt-4 flex justify-between items-center bg-transparent">
                <span className="text-lg font-bold bg-transparent">
                  {laptop.price}
                </span>
                {/* <button className="bg-gradient-to-br from-pink-400 to-primary text-white py-2 px-6 rounded-lg hover:bg-primary-dark transition duration-300transition duration-100 ease-in-out hover:bg-none hover:border-2 hover:border-card hover:text-gray-500 font-bold focus:outline-none focus:shadow-outline">
                  Buy Now
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestDeals;
