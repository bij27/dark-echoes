import "./Description.css";

function Description({ selectedEpisode }) {
  return (
    <section className="description">{selectedEpisode?.description}</section>
  );
}

export default Description;
