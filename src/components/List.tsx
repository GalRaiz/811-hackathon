import React, { useState } from "react";
import "./Table.scss";
import { IDrink } from "../store/types.ts";
import SidePanel from "./SidePanel.tsx";
import SearchBar from "./SearchBar.tsx";
import EmptyState from "./EmptyState.tsx";

interface TableProps {
  data: IDrink[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const onSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const [selectedDrink, setSelectedDrink] = useState<IDrink | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleRowClick = (drink: IDrink) => {
    setSelectedDrink(drink);
    setIsPanelOpen(true);
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false);
    setSelectedDrink(null);
  };

  const filteredData = data.filter((drink) =>
    drink.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SearchBar searchQuery={searchQuery} onSearchChange={onSearchChange} />
      {filteredData.length === 0 ? (
        <EmptyState />
      ) : (
        <div className={`table-layout ${isPanelOpen ? "panel-open" : ""}`}>
          <div className="li-wrapper">
            <div className="li-row">
              <li>Name</li>
              <ul className="li-cell">Price</ul>
              <ul className="li-cell">Type</ul>
            </div>
            {filteredData.map((drink) => (
              <div
                key={drink.id}
                className="li-row"
                onClick={() => handleRowClick(drink)}
              >
                <li>{drink.name}</li>
                <ul className="li-cell">${drink.price}</ul>
                <ul className="li-cell">{drink.type}</ul>
              </div>
            ))}
          </div>
          <SidePanel
            type="drinkDetails"
            isOpen={isPanelOpen}
            onClose={handleClosePanel}
            drink={
              selectedDrink
                ? {
                    name: selectedDrink.name,
                    image: selectedDrink.image || "",
                    description: selectedDrink.description || "",
                  }
                : undefined
            }
            filterType="drinkDetails ?? filterDrinks"
            onFilterChange={() => {}}
          />
        </div>
      )}
    </>
  );
};

export default Table;
