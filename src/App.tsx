import { nodes } from "./constant/roadmap";
import { RecursiveRender } from "./Component/RecursiveRender";

function App() {
  return (
    <div className="m-4">
      <h2 className="text-3xl font-bold text-neutral-800">
        Recursive Component Example
      </h2>
      <ul className="mt-5">
        {nodes.map((node, index) => (
          <RecursiveRender key={index} data={node} />
        ))}
      </ul>
    </div>
  );
}

export default App;
