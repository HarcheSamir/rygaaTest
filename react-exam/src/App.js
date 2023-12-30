
import Shape from './Components/Shape'

function App() {
  return (
   <div className="container">
      <Shape type="rectangle" dimensions={{ width: 200, height: 100 }} />
      <Shape type="triangle" dimensions={{ sideLength: 100 }} />
      <Shape type="circle" dimensions={{ radius: 50 }} />
   </div>
  );
}

export default App;
