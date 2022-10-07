import React from "react";

const Pokeinfo = ({ data }) => {
  console.log(data);
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt=""
          />
          <h1>{data.name}</h1>
          <div className="base-stat">
            <div>
              Type:
              {data.types.map((el) => {
                return <span className="type"> {el.type.name} </span>;
              })}
            </div>
            {data.stats.map((poke) => {
              return (
                <>
                  <p>
                    {poke.stat.name}: {poke.base_stat}
                  </p>
                </>
              );
            })}
            <p>weight: {data.weight}</p>
            <p>moves: {data.moves.length}</p>
          </div>
        </>
      )}
    </>
  );
};

export default Pokeinfo;
