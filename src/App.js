import React from "react";

import styles from "./App.module.css";
//Components
import { Cards, Country, Chart } from "./components";

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <Country />
        <Chart />
      </div>
    );
  }
}

export default App;
