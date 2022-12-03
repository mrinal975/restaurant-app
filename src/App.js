import './App.css';
import Header from './components/Headers';
import Tailwind from './components/TailWind/TailWind';
import Flex from './components/TailWind/Flex';
import GridColumns from './components/TailWind/GridColumn';
import CardNew from './components/TailWind/CardNew';
function App() {
  return (
    <div className="w-screen h-auto flex flex-col">
      {/* <Header/> */}
      {/* <Tailwind /> */}
      {/* <Flex /> */}
      {/* <GridColumns/> */}
      <CardNew />
    </div>
  );
}

export default App;
