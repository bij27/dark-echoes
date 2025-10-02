import "./Title.css";

function Title({ selectedEpisode }) {
  return <section className="title">{selectedEpisode?.title}</section>;
}

export default Title;
