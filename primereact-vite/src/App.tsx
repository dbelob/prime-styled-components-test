import { Button } from "@primereact/ui/button";
import { InputText } from "@primereact/ui/inputtext";
import "./App.css";

export default function App() {
    return (
        <>
            <h1>PrimeReact (without Tailwind)</h1>
            <div style={{ margin: "1rem 0 1rem 0" }}>
                <Button>Check</Button>
            </div>
            <div style={{ margin: "1rem 0 1rem 0" }}>
                <InputText placeholder="Enter text" />
            </div>
        </>
    );
}
