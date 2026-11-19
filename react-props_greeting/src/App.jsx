export default function App() {
  return <Greeting text="Emma" />;
}

function Greeting({ text }) {
  return <h1>Hello {text}!</h1>;
}