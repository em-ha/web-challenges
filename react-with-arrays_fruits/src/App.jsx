import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
    id: 0,
    name: "Banana",
    color: "yellow",
  },
   {
    id: 1,
    name: "Orange",
    color: "orange",
  },
    {
    id: 2,
    name: "Kiwi",
    color: "green",
  },
    {
    id: 3,
    name: "Apple",
    color: "red",
  },
  {
    id: 4,
    name: "Blueberry",
    color: "purple",
  },
  ];



  return (
    <div className="app">{fruits.map((fruit) => (<Card key={fruit.id} name={fruit.name} color={fruit.color}/>))}
    </div>
    
   
  );
}
