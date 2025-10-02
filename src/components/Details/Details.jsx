import "./Details.css";

function Details({ selectedEpisode }) {
  if (!selectedEpisode) {
    return (
      <section className="details">Select an episode to see details.</section>
    );
  }

  return (
    <section className="episode-id">
      <h2>Episode {selectedEpisode?.id}</h2>

      <p className="details">{selectedEpisode?.title}</p>
    </section>
  );
}

export default Details;
