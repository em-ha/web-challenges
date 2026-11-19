export default function App() {
  return <Greeting name="Alex" />;
}

function Greeting({ name }) {
  if (name === "Alex") {
  return <h1>Hello Coach!</h1>;
} else {
  return <h1>Hello {name}!</h1>;
}
}