import { useState } from "react";
import Header from "./Header";
import CategoryRenderer from "./CategoryRenderer";
import './style.css'

export default function MainPage({ setPage }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedGame, setSelectedGame] = useState("");

  return (
    <>
      <Header 
        setPage={setPage} 
        setSelectedCategory={setSelectedCategory}
        setSelectedGame={setSelectedGame}
      />

      <main>
        <h2>{selectedCategory} {selectedGame}</h2>

        <div id="gridded-blocks">
          {selectedCategory && selectedGame && (
            <CategoryRenderer 
              category={selectedCategory.toLowerCase()} 
              selectedGame={selectedGame} 
            />
          )}
        </div>
      </main>
    </>
  );
}
