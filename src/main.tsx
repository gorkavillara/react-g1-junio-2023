import { onLCP, onFID, onCLS } from "web-vitals"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <App />
)

onCLS(data => console.log(data))
onFID(console.log)
onLCP(console.log)
