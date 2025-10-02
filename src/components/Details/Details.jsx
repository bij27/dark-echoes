import "./Details.css";

function Details({ selectedEpisode }) {
  if (!selectedEpisode) {
    return (
      <section className="details">Select an episode to see details.</section>
    );
  }

  return (
    <section className="details">
      <h2>Episode {selectedEpisode?.id}</h2>
      <p className="title">{selectedEpisode?.title}</p>
      <section className="description-container">
        <h3>Episode Summary</h3>
        <p>{selectedEpisode?.description}</p>
      </section>
      <button className="watch-btn">Watch now</button>
    </section>
  );
}

export default Details;
