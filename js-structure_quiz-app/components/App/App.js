import { Header } from "../Header/Header.js";
import { Form } from "../Form/Form.js";

import { CardList } from "../CardList/CardList.js";

export function App(cards) {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(cards), CardList(cards));

  return app;
}