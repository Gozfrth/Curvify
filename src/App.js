// TODO:
// Add Bezier Curve Page (vite->react)
// Composite Wave Scale

import Link from './components/Link.js';
import Route from './components/Route.js';
import CompositeWavePage from './pages/CompositeWavePage.js';

function App() {
  return (
    <div className='w-screen bg-gray-950'>
      <div className='h-screen flex justify-center items-center'>

        <Route path = '/compositewavepage'>
          <CompositeWavePage />
        </Route>

        {/* <Route path = '/beziercurvepage'>
          <CompositeWavePage />
        </Route> */}

      </div>
      <div className='absolute bottom-0 right-0 p-4 mb-3'>
      {/* <Link className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded mr-3" to="/beziercurvepage">Bezier Curve</Link> */}
        <Link className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded mr-3" to="/compositewavepage">CompositeWave (SINE)</Link>
      </div>
    </div>
  );
}

export default App;