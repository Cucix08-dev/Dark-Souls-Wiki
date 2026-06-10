import { useEffect, useState } from "react";

export default function CategoryRenderer({ category, selectedGame }) {
  const [data, setData] = useState(null);

  function buildJsonPath(category, selectedGame) {
    const romanToNum = { I: 1, II: 2, III: 3 };
    const num = romanToNum[selectedGame] || 0;

    const cat = (category || "").toLowerCase();
    return `/data/ds${num}_${cat}.json`;
  }


  useEffect(() => {
    async function load() {
      const file = buildJsonPath(category, selectedGame);

      const res = await fetch(file);
      const json = await res.json();
      setData(json.content);
    }

    load();
  }, [category, selectedGame]);

  if (!data) return <p>Loading...</p>;

  return (
    <>
      {data.map((item, i) => (
        <div className="dark-souls-item-container" key={i}>
          {item.srcIcon && (
            <img className="icon-item" src={item.srcIcon} alt={item.name} />
          )}

          <div className="text-item">
            <h2 className="name-item">{item.name}</h2>
            <h3 className="desc-item">{item.desc}</h3>
          </div>
        </div>
      ))}
    </>
  );
}
