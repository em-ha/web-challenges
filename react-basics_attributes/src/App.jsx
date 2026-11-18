import "./styles.css";

export default function App() {
  return <ThisIsMyFunction />;
}

function ThisIsMyFunction() {
return <article className="article"><h2 className="article__title">Heading</h2><label htmlFor="label-text">Label</label><input id="label-text"></input><a className="article__link" href="https://vite.dev/">Text content</a></article>
}
