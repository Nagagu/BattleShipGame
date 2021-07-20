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

export default App;
