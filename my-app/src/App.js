import logo from "./logo.svg";
import "./App.css";
import Home from "./HomePage/Layout/Layout";
import Directory from "./HomePage/Layout/Main Content/Directory/Directory";
import BarChart from "./HomePage/Layout/Charts/Chart";
import { useEffect, useState } from "react";

function App() {
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    fetch("MOCK_DATA.json")
      .then((response) => response.json())
      .then((dataSource) => setDataSource(dataSource));
  }, []);

  return (
    <>
      <Home dataSource={dataSource} />
    </>
  );
}

export default App;
