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

  const columns = ["Name", "Price", "Type"];

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
          <div className="table-wrapper">
            <table className="custom-table">
              <thead>
                <tr>
                  {columns.map((col) => (
                    <th key={col} className="table-header">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredData.map((drink) => (
                  <tr
                    key={drink.id}
                    className="table-row"
                    onClick={() => handleRowClick(drink)}
                  >
                    <td className="table-cell">{drink.name}</td>
                    <td className="table-cell">${drink.price}</td>
                    <td className="table-cell">{drink.subType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <SidePanel
            type="drinkDetails"
            isOpen={isPanelOpen}
            onClose={handleClosePanel}
            drink={
              selectedDrink
                ? {
                    name: selectedDrink.name,
                    image: selectedDrink.image,
                    description: selectedDrink.description,
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
