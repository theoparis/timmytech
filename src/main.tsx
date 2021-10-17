import { render } from "preact";
import { App } from "./app";
import "./index.css";

const root = document.getElementById("app");

if (!root) throw new Error("Root element does not exist");

render(<App />, root);
