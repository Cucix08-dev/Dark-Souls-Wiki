import { useState } from 'react';
import './Header.css';

export default function Header({ setPage, setSelectedCategory, setSelectedGame }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeGame, setActiveGame] = useState(null);

  const categories = [
    "Objects",
    "Bosses",
    "NPCs",
    "Armors",
    "Weapons",
    "Pyromancies",
    "Sorceries",
    "Enchantments",
    "Rings"
  ];

  const trilogy = ["I", "II", "III"];

  return (
    <header>
      <h1 id='title-page'>Dark Souls Wiki</h1>

      <ul id='category-list'>
        {categories.map((cat, index) => (
          <li
            key={index}
            className={activeCategory === index ? "active" : ""}
            onClick={() => {
              setActiveCategory(index);
              setSelectedCategory(cat);
            }}
          >
            {cat}
          </li>
        ))}
      </ul>

      <ul id='darksouls-trilogy-list'>
        {trilogy.map((game, index) => (
          <li
            key={index}
            className={activeGame === index ? "active" : ""}
            onClick={() => {
              setActiveGame(index);
              setSelectedGame(game);

              if (activeCategory === null) {
                setSelectedCategory("Objects");
                setActiveCategory(0);
              }
            }}
          >
            {game}
          </li>
        ))}
      </ul>

    </header>
  );
}
