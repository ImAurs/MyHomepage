import { render } from "preact";
import AppPage from "./app";

export function App() {
    return <AppPage />;
}

render(<App />, document.getElementById("root"));
