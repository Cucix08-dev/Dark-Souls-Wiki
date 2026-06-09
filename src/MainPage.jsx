import { useState } from 'react';
import Header from './Header';

import Armors from './categories/Armors';
import Bosses from './categories/Bosses';
import Enchantments from './categories/Enchantments';
import NPCs from './categories/NPCs';
import Objects from './categories/Objects';
import Pyromancies from './categories/Pyromancies';
import Rings from './categories/Rings';
import Sorceries from './categories/Sorceries';
import Weapons from './categories/Weapons';

import './style.css';

export default function MainPage({ setPage }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedGame, setSelectedGame] = useState("");

  const categoryComponents = {
    Objects,
    Bosses,
    NPCs,
    Armors,
    Weapons,
    Pyromancies,
    Sorceries,
    Enchantments,
    Rings
  };

  const SelectedComponent = categoryComponents[selectedCategory];

  return (
    <>
      <Header 
        setPage={setPage} 
        setSelectedCategory={setSelectedCategory}
        setSelectedGame={setSelectedGame}
      />

      <main>
        <h2>
          {selectedCategory} {selectedGame}
        </h2>

        <div id='gridded-blocks'>
          {SelectedComponent && <SelectedComponent game={selectedGame} />}
        </div>
      </main>
    </>
  );
}
