import React from "react";
import "./App.css";
import Episodes from "./components/Episodes/Episodes";
import Details from "./components/Details/Details";
import { episodeList } from "./data";
import Description from "./components/Description/Description";
import Title from "./components/Title/Title";

function App() {
  const [selectedEpisode, setSelectedEpisode] = React.useState(null);

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>

      <main>
        <Episodes
          episodeData={episodeList}
          setSelectedEpisode={setSelectedEpisode}
        />
        <div className="details-column">
        <Details selectedEpisode={selectedEpisode} />
        <Title selectedEpisode={selectedEpisode} />
        <Description selectedEpisode={selectedEpisode} />
        </div>
      </main>
    </>
  );
}

export default App;
