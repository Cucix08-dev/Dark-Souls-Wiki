import { useState } from 'react';

export default function Sets({ selectedGame }) {
  
  const sets = [
    {
      game: "I",
      content: [
        {
          name: "Elite Knight Helm",
          srcIcon: "/assets/I/sets/Elite Knight Helm.jpg",
          desc: `${'"'}Helm of a nameless knight, perhaps an elite knight of Astora. Although he was loath to give up on his Undead mission, he perished at the Undead Asylum, and went Hollow.${'"'}`
        },
        {
          name: "Elite Knight Armor",
          srcIcon: "/assets/I/sets/Elite Knight Armor.png",
          desc: `${'"'}Armor of a nameless knight, perhaps an elite knight of Astora, based on the fire-warding heraldic symbol on its blue surcoat. Although he was loath to give up on his Undead mission, he perished at the Undead Asylum, and went Hollow.${'"'}`
        },
        {
          name: "Elite Knight Gauntlets",
          srcIcon: "/assets/I/sets/Elite Knight Gauntlets.png",
          desc: `${'"'}Gauntlets of a nameless knight, perhaps an elite knight of Astora. Although he was loath to give up on his Undead mission, he perished at the Undead Asylum, and went Hollow.${'"'}`
        },
        {
          name: "Elite Knight Leggings",
          srcIcon: "/assets/I/sets/Elite Knight Leggings.png",
          desc: `${'"'}Leggings of a nameless knight, perhaps an elite knight of Astora. Although he was loath to give up on his Undead mission, he perished at the Undead Asylum, and went Hollow.${'"'}`
        },

        {
          name: "Knight Helm",
          srcIcon: "/assets/I/sets/Knight Helm.png",
          desc: `${'"'}Helm equipment of a lower rank knight. Despite the thin metal used, the grooved texture gives them added protection.${'"'}`
        },
        {
          name: "Knight Armor",
          srcIcon: "/assets/I/sets/Knight Armor.png",
          desc: `${'"'}Armor equipment of a lower a rank knight. Despite the thin metal used, the grooved texture gives them added protection.${'"'}`
        },
        {
          name: "Knight Gauntlets",
          srcIcon: "/assets/I/sets/Knight Gauntlets.png",
          desc: `${'"'}Gauntlets equipment of a lower a rank knight. Despite the thin metal used, the grooved texture gives them added protection.${'"'}`
        },
        {
          name: "Knight Leggings",
          srcIcon: "/assets/I/sets/Knight Leggings.png",
          desc: `${'"'}Legging sequipment of a lower a rank knight. Despite the thin metal used, the grooved texture gives them added protection.${'"'}`
        },
        
        {
          name: "Wanderer Hood",
          srcIcon: "/assets/I/sets/Wanderer Hood.png",
          desc: `${'"'}Hood of an aimless traveler. Made from sturdy leather, it offers protection versus wind and rain.${'"'}`
        },
        {
          name: "Wanderer Coat",
          srcIcon: "/assets/I/sets/Wanderer Coat.png",
          desc: `${'"'}Coat of an aimless traveler. Made from sturdy leather and quilting. Battle comes with the territory when one wanders the land, and this coat provides a certain degree of protection.${'"'}`
        },
        {
          name: "Wanderer Manchette",
          srcIcon: "/assets/I/sets/Wanderer Manchette.png",
          desc: `${'"'}Manchette of an aimless wanderer. Made from sturdy leather and protects the hands. Boots of an aimless traveler. Made from sturdy leather. A must-have for long journeys.${'"'}`
        },
        {
          name: "Wanderer Boots",
          srcIcon: "/assets/I/sets/Wanderer Boots.png",
          desc: `${'"'}Boots of an aimless traveler. Made from sturdy leather. A must-have for long journeys.${'"'}`
        },

        {
          name: "Thief Set",
          srcIcon: "/assets/I/armors/Thief Set.png",
          desc: `${'"'}${'"'}`
        },
        {
          name: "Black Leather Set",
          srcIcon: "/assets/I/armors/Black Leather Set.png",
          desc: `${'"'}${'"'}`
        },
        {
          name: "Black Knight Set",
          srcIcon: "/assets/I/armors/Black Knight Set.png",
          desc: `${'"'}${'"'}`
        },
        {
          name: "Silver Knight Set",
          srcIcon: "/assets/armors/Silver Knight Set.png",
          desc: `${'"'}${'"'}`
        },
        {
          name: "Giant Set",
          srcIcon: "/assets/armors/Giant Set.png",
          desc: `${'"'}${'"'}`
        },
        {
          name: "Havel's Set",
          srcIcon: "/assets/armors/Havel's Set.png",
          desc: `${'"'}${'"'}`
        },
        {
          name: "Brass Set",
          srcIcon: "/assets/armors/Brass Set.png",
          desc: `${'"'}${'"'}`
        },
        {
          name: "Crimson Set",
          srcIcon: "/assets/armors/Crimson Set.png",
          desc: `${'"'}${'"'}`
        },
        {
          name: "Maiden Set",
          srcIcon: "/assets/armors/Maiden Set.png",
          desc: `${'"'}${'"'}`
        },
        {
          name: "Cleric Set",
          srcIcon: "/assets/armors/Cleric Set.png",
          desc: `${'"'}${'"'}`
        },
        {
          name: "Paladin Set",
          srcIcon: "/assets/armors/Paladin Set.png",
          desc: `${'"'}${'"'}`
        },
        {
          name: "Black Iron Set",
          srcIcon: "/assets/armors/Black Iron Set.png",
          desc: `${'"'}${'"'}`
        },
        {
          name: "Iron Set",
          srcIcon: "/assets/armors/Iron Set.png",
          desc: `${'"'}${'"'}`
        },
        {
          name: "Balder Set",
          srcIcon: "/assets/armors/Balder Set.png",
          desc: `${'"'}${'"'}`
        },
        {
          name: "Catarina Set",
          srcIcon: "/assets/armors/Catarina Set.png",
          desc: `${'"'}${'"'}`
        },
        {
          name: "Eastern Set",
          srcIcon: "/assets/armors/Eastern Set.png",
          desc: `${'"'}${'"'}`
        },
        {
          name: "Shadow Set",
          srcIcon: "/assets/armors/Shadow Set.png",
          desc: `${'"'}${'"'}`
        },
        {
          name: "Gold-Hemmed Black Set",
          srcIcon: "/assets/armors/Gold-Hemmed Black Set.png",
          desc: `${'"'}${'"'}`
        },
        {
          name: "Xanthous Set",
          srcIcon: "/assets/armors/Xanthous Set.png",
          desc: `${'"'}${'"'}`
        }
      ]
    }
  ];


  if (selectedGame === "I") {
    return (
      <>
        {sets[0].content.map((item, index) => (
          <div className="dark-souls-item-container" key={index}>
            <img className='icon-item' src={item.srcIcon} alt={item.name} />

            <div className="text-item">
              <h2 className="name-item">{item.name}</h2>
              <h3 className="desc-item">{item.desc}</h3>
            </div>
          </div>
        ))}
      </>
    );
  }


  if (selectedGame === "II") {
    return (
      <>
        {/* Contenuto per Dark Souls II */}
      </>
    );
  }

  if (selectedGame === "III") {
    return (
      <>
        {/* Contenuto per Dark Souls III */}
      </>
    );
  }

  return null;
}
