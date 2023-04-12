import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./utils/store"

export default function App() {
  return (
    <Provider store={store}>
    <div>
      <Head/>
      <Body/>
      </div>
      </Provider>
  )
}