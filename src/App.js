import React from "react";

import styles from "./App.module.css";
//Components
import { Cards, Country, Chart } from "./components";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  render() {
    const data = this.state.data;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <Country />
        <Chart />
      </div>
    );
  }
}

export default App;
