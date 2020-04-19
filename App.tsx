import React from "react";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./src/moduels";

import RootStack from "./src/screens";

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
}
