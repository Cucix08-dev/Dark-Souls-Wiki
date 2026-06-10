import { useEffect, useState } from "react";

export default function Sets({ selectedGame }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const file = `/data/ds${selectedGame}_sets.json`;
      const res = await fetch(file);
      const json = await res.json();
      setData(json.content);
    }

    loadData();
  }, [selectedGame]);

  if (!data) return <p>Loading...</p>;

  return (
    <>
      {data.map((item, index) => (
        <div className="dark-souls-item-container" key={index}>
          <img className="icon-item" src={item.srcIcon} alt={item.name} />

          <div className="text-item">
            <h2 className="name-item">{item.name}</h2>
            <h3 className="desc-item">"{item.desc}"</h3>
          </div>
        </div>
      ))}
    </>
  );
}
