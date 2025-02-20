import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import appStore from "./utils/appStore";
import Body from "./components/Body";

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Header /> {/* Header stays fixed */}
        {/* <Outlet /> This will change based on routing */}
       <Outlet/>
      </div>
    </Provider>
  );
}

export default App;
