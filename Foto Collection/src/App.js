import React, { useEffect, useState } from "react";
import "./index.scss";
import { Collection } from "./Collection";

const categoryList = [
  { name: "Все" },
  { name: "Море" },
  { name: "Гори" },
  { name: "Архітектура" },
  { name: "Міста" },
];

function App() {
  const [collections, setCollections] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);

    const category = categoryId ? `category=${categoryId}` : ``;

    fetch(
      `https://632b2f8a713d41bc8e82de85.mockapi.io/fotoCollection?page=${page}&limit=4&${category}`
    )
      .then((res) => res.json())
      .then((json) => {
        setCollections(json);
      })
      .catch((error) => {
        console.warn(error);
        alert("Помилка при отриманні даних");
      })
      .finally(() => setIsLoading(false));
  }, [categoryId, page]);

  return (
    <div className="App">
      <h1>Моя колекція фотографій</h1>
      <div className="top">
        <ul className="tags">
          {categoryList.map((obj, index) => (
            <li
              onClick={() => setCategoryId(index)}
              key={index}
              className={categoryId === index ? "active" : ""}
            >
              {obj.name}
            </li>
          ))}
        </ul>
        <input
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          className="search-input"
          placeholder="Пошук по назві"
        />
      </div>
      <div className="content">
        {isLoading ? (
          <h2>Завантаження...</h2>
        ) : (
          collections
            .filter((obj) =>
              obj.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((obj, index) => (
              <Collection key={index} name={obj.name} images={obj.photos} />
            ))
        )}
      </div>
      <ul className="pagination">
        {[...Array(3)].map((_, index) => (
          <li
            key={index}
            onClick={() => setPage(index + 1)}
            className={page === index + 1 ? "active" : ""}
          >
            {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
