import Home from "./Components/Home/Home";
import Context from "./Components/context/Context";
import BasicModal from "./Components/modals/Modal";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import TableData from "./Components/tableData/TableData";

export default function App() {
  return (
    <div className="App mt-2">
      <Context>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table" element={<TableData />} />
        </Routes>
        <BasicModal />
      </Context>
    </div>
  );
}
