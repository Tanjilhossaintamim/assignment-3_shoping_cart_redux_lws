import { Provider } from "react-redux";
import MainComponent from "./components/MainComponent";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <MainComponent />
      </Provider>
    </>
  );
}

export default App;
