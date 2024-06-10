import React from "react";
import styles from "./Products.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Products({ addGameFunc, info, index }) {
  const [gameLink, setGameLink] = useState("");
  const [gameName, setGameName] = useState("");
  const [gameMark, setGameMark] = useState("");
  const [gameGrade, setGameGrade] = useState("");
  const addGame = () => {
    addGameFunc(gameLink, gameName, gameMark, gameGrade, "Skale");
  };
  return (
    <section>
      <div className={styles.firstDiv}>
        <img
          className={styles.img1}
          height="80"
          src="https://github.com/SkaLe3/KPI-Web-labs/blob/main/assets/browse_banner.png?raw=true"
          alt="Games"
        />
        <img
          className={styles.img2}
          height="60"
          src="https://github.com/SkaLe3/KPI-Web-labs/blob/main/assets/games.png?raw=true"
          alt="Games"
        />
        <h1 className={styles.text_white}>
          Find your next captivating gaming moment
        </h1>
      </div>
      <section className={styles.secondSection}>
        <div className={styles.secondDiv}>
          <h4 className="text-white font-lg font-weight-bold">All Games</h4>
        </div>
        <div className={styles.thirdDiv}>
          <div className={styles.cardRow}>
            <div className={styles.card}>
              <img
                src={info.gameLink[index]}
                className="card-img-top game-card"
                alt="Battlefield 2042"
              />
              <div className={styles.cardText}>
                <div className="card-title font-heading">
                  {info.gameName[index]}
                </div>
                <div className={styles.cardSecText}>
                  <div className="col-2">
                    <div className="score-mid">{info.gameMark[index]}</div>
                  </div>
                  <div className="col-10 px-2">
                    <p className="text-white font-xsm mb-0">
                      {info.gameGrade[index]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.inputInfo}>
            <input
              type="text"
              placeholder=" Write Url link photo of Game"
              value={gameLink}
              onChange={(e) => setGameLink(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder=" Write Game Name"
              value={gameName}
              onChange={(e) => setGameName(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder=" Write Game Mark"
              value={gameMark}
              onChange={(e) => setGameMark(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder=" Write Game Grade"
              value={gameGrade}
              onChange={(e) => setGameGrade(e.target.value)}
            ></input>
            <button className={styles.buttonAdd} onClick={addGame}>
              Add new game
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Products;
