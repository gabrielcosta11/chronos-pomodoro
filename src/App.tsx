import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css"
import { TimerIcon } from "lucide-react";

export function App() {
    return (
        <>
            <Heading>
                Olá mundo!
                <button>
                    <TimerIcon/>
                </button>
            </Heading>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta alias eos est culpa repellendus dolorem dignissimos deserunt aliquam illo et eum totam odio iusto in odit, fuga quae quis? Cum.</p>
        </>
    )
}; 