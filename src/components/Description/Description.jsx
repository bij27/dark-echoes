import "./Description.css";

function Description({ selectedEpisode }) {
  return (
    <section className="description-container">
      <h3>Episode Summary</h3>
      <p>{selectedEpisode?.description}</p>
    </section>
  );
}

export default Description;
