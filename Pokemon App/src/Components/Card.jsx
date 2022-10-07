import React from "react";

const Card = ({ pokemon, loading, infoPokemon }) => {
  console.log(pokemon);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <>
              <div
                className="card"
                key={item.id}
                onClick={() => infoPokemon(item)}
              >
                <img src={item.sprites.front_default} alt="" />
                <h2>{item.name}</h2>
                <br />
                <div className="pok-types">
                  {item.types.map((el) => {
                    switch (el.type.name) {
                      case "grass":
                        return (
                          <span
                            style={{
                              backgroundColor: "#00FF00",
                              borderRadius: "5px",
                            }}
                          >
                            {el.type.name}
                          </span>
                        );
                      case "poison":
                        return (
                          <span
                            style={{
                              backgroundColor: "#66CC00",
                              borderRadius: "5px",
                            }}
                          >
                            {el.type.name}
                          </span>
                        );
                      case "fire":
                        return (
                          <span
                            style={{
                              backgroundColor: "#FF8000",
                              borderRadius: "5px",
                            }}
                          >
                            {el.type.name}
                          </span>
                        );
                      case "flying":
                        return (
                          <span
                            style={{
                              backgroundColor: "#FFFFFF",
                              borderRadius: "5px",
                            }}
                          >
                            {el.type.name}
                          </span>
                        );
                      case "water":
                        return (
                          <span
                            style={{
                              backgroundColor: "#3399FF",
                              borderRadius: "5px",
                            }}
                          >
                            {el.type.name}
                          </span>
                        );
                      case "bug":
                        return (
                          <span
                            style={{
                              backgroundColor: "#00CC66",
                              borderRadius: "5px",
                            }}
                          >
                            {el.type.name}
                          </span>
                        );
                      case "normal":
                        return (
                          <span
                            style={{
                              backgroundColor: "#A0A0A0",
                              borderRadius: "5px",
                            }}
                          >
                            {el.type.name}
                          </span>
                        );
                      case "ground":
                        return (
                          <span
                            style={{
                              backgroundColor: "#693B3B",
                              borderRadius: "5px",
                            }}
                          >
                            {el.type.name}
                          </span>
                        );
                      case "fighting":
                        return (
                          <span
                            style={{
                              backgroundColor: "#FF0000",
                              borderRadius: "5px",
                            }}
                          >
                            {el.type.name}
                          </span>
                        );
                      case "psychic":
                        return (
                          <span
                            style={{
                              backgroundColor: "#FFFF33",
                              borderRadius: "5px",
                            }}
                          >
                            {el.type.name}
                          </span>
                        );
                      case "rock":
                        return (
                          <span
                            style={{
                              backgroundColor: "#606060",
                              borderRadius: "5px",
                            }}
                          >
                            {el.type.name}
                          </span>
                        );
                      case "electric":
                        return (
                          <span
                            style={{
                              backgroundColor: "#FFFF33",
                              borderRadius: "5px",
                            }}
                          >
                            {el.type.name}
                          </span>
                        );
                      case "fairy":
                        return (
                          <span
                            style={{
                              backgroundColor: "#FF99FF",
                              borderRadius: "5px",
                            }}
                          >
                            {el.type.name}
                          </span>
                        );
                      case "steel":
                        return (
                          <span
                            style={{
                              backgroundColor: "#606060",
                              borderRadius: "5px",
                            }}
                          >
                            {el.type.name}
                          </span>
                        );
                      case "ghost":
                        return (
                          <span
                            style={{
                              backgroundColor: "#9933FF",
                              borderRadius: "5px",
                            }}
                          >
                            {el.type.name}
                          </span>
                        );
                      default:
                        break;
                    }
                  })}
                </div>
              </div>
            </>
          );
        })
      )}
    </>
  );
};

export default Card;
