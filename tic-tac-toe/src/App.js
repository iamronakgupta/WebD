import logo from "./logo.svg";
import "./App.css";
import Row from "./components/Row";
import { DataProvider } from "./DataContext";
import Output from "./components/Ouput";
import PlayChoice from "./components/PlayChoice";
import Board from "./components/Board";
import Reset from "./components/Reset";

function App() {
  return (
    <DataProvider>
      <div className="main_back">
        <Reset/>
        <table className="border-none">
          <Board />
        </table>
        <Output />
        <PlayChoice />
      </div>
    </DataProvider>
  );
}

export default App;
