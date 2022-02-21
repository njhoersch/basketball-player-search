import { React, useState } from "react";
import "./App.css";
import InfoComponent from "./components/InfoComponent";
import SearchInput from "./components/SearchInput";

import SearchPlayerService from "./services/SearchPlayerService";

function App() {
    const [player, setPlayer] = useState({});
    const [found, setFound] = useState({ searched: false, found: false });

    const processSearch = (firstName, lastName) => {
        const player = SearchPlayerService.searchPlayer(firstName, lastName);
        if (player === null || player === undefined) {
            setFound({ searched: true, found: false });
        } else {
            setPlayer(player);
            setFound({ searched: true, found: true });
        }
    };

    return (
        <div className="flex main-container">
            <div
                id="serach-area-container"
                className="search-area-container flex"
            >
                <SearchInput searchPressed={processSearch} />
            </div>
            <div
                id="info-display-container"
                className="info-display-container flex"
            >
                <InfoComponent found={found} player={player} />
            </div>
        </div>
    );
}

export default App;
