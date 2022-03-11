import "./App.css";
import Grid from "./components/GridArea/Grid";
import GameController from "./components/GameController";

function App() {
  return (
    <div className="App flex flex-col items-center">
      <Grid />
      <GameController />
    </div>
  );
}

export default App;
