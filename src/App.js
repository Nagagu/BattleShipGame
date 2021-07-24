import { Provider } from "react-redux";
import { GameScreen } from "./components/GameScreen";

import "./index.css";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <GameScreen />
    </Provider>
  );
}

var swLocation = "./sw.js";
if (navigator.serviceWorker) {
  var url = window.location.href;

  if (url.includes("localhost")) {
    swLocation = "./BattleShipGame/sw.js";
  }
  navigator.serviceWorker.register(swLocation);
}
export default App;
