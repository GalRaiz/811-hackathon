import React from "react";

const Menu = ({ wines }: { wines: any[] }) => {
  return (
    <div>
      <h2>Wines Menu</h2>
      {["Red", "White"].map((type) => (
        <div key={type}>
          <h3>{type}</h3>
          <ul>
            {wines
              .filter((wine) => wine.type === type)
              .map((wine, index) => (
                <li key={index}>{wine.name}</li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;
