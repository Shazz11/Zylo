import React from "react";
import productsData from "../data/products.json";

const TestProducts = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ marginBottom: "20px" }}>Test Products Page</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {productsData.map((item) => (
          <div
            key={item.id}
            style={{
              width: "250px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              background: "#fff",
              boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={item.img}
              alt={item.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />

            <h3 style={{ margin: "10px 0" }}>{item.name}</h3>

            <p style={{ color: "gray" }}>{item.description}</p>

            <p style={{ fontWeight: "bold", marginTop: "10px" }}>
              Price: ₹{item.price}
            </p>

            {item.discountedPrice && (
              <p style={{ color: "green", fontWeight: "600" }}>
                Discounted: ₹{item.discountedPrice}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestProducts;
