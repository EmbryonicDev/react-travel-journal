import Header from "./components/Header";
import data from './data'
import Destination from "./components/Destination";

function App() {
  const entryEl = data.map(item => {
    return (
      <div>
        <Destination
          item={item}
        />
        <hr></hr>
      </div>
    )
  })
  return (
    <div className="App">
      <Header />
      {entryEl}
    </div>
  );
}

export default App;
