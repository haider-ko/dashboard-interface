import logo from "./logo.svg";
import "./App.css";
import Home from "./HomePage/Layout/Layout";
import Directory from "./HomePage/Layout/Main Content/Directory/Directory";
import BarChart from "./HomePage/Layout/Charts/Chart";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersFetch } from "./store/sagas/slice/usersSlice";
import FakeTable from "./HomePage/Layout/Tables/FakeTable";
import FirstTable from "./HomePage/Layout/Tables/FirstTable";

function App() {
  // const [dataSource, setDataSource] = useState([]);
  // useEffect(() => {
  //   fetch("MOCK_DATA.json")
  //     .then((response) => response.json())
  //     .then((dataSource) => setDataSource(dataSource));
  // }, []);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getUsersFetch());
  // }, [dispatch]);

  // const users = useSelector((state) => state.users.users);

  // return <>{users && <Home users={users} />}</>;
  return <Home />;
}

export default App;
