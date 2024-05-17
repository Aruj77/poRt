import React from "react";

function Companies() {
  const companies = [
    {
      name: "Dell",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/25/Dell_logo.png",
      starting_from: "₹12,000",
    },
    {
      name: "HP",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/HP_New_Logo_2D.svg/2048px-HP_New_Logo_2D.svg.png",
      starting_from: "₹15,000",
    },
    {
      name: "Acer",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Acer-Logo_2011.png",
      starting_from: "₹8,000",
    },
    {
      name: "Asus",
      logo: "https://logos-world.net/wp-content/uploads/2020/07/Asus-Logo-1995-present.png",
      starting_from: "₹25,000",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-11">
        <h1 className="text-3xl md:text-5xl font-bold">Top Brands</h1>
        <button className="bg-transparent border-2 border-card text-gray-500 py-2 px-6 rounded-lg transition duration-300 ease-in-out hover:text-white hover:bg-gradient-to-br hover:from-pink-400 hover:to-primary">
          See All
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {companies.map((company, index) => (
          <div
            key={index}
            className="bg-card rounded-lg shadow-lg p-6 flex flex-col items-center transition duration-300 ease-in-out hover:bg-gradient-to-br hover:from-pink-400 hover:to-primary"
          >
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="w-24 h-24 mb-4 object-contain bg-transparent"
            />
            <h2 className="text-xl font-semibold bg-transparent">
              {company.name}
            </h2>
            <p className="text-gray-200 bg-transparent">
              Starting at {company.starting_from}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Companies;
