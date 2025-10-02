import "./Episodes.css";

function Episodes({ setSelectedEpisode, episodeData }) {
  return (
    <section className="episodes">
      <h2>Episodes</h2>
      <ul>
        {episodeData.map((episode) => (
          <li
            key={episode.id}
            onClick={() => {
              setSelectedEpisode(episode);
            }}
          >
            {episode.title}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Episodes;
