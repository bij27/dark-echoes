import "./Details.css";

function Details({ selectedEpisode }) {
  return (
    <section className="details">Episode {selectedEpisode?.id}</section>
  );
}

export default Details;
