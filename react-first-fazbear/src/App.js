import logo from './logo.svg';
import './App.css';
import RequestsGET from './button';
function App() {
  return (
      <div className="flex bg-blue-300 justify-center min-h-screen">
        <RequestsGET />
        <h1 className="bg-blue-700 bg-transparent text-white font-bold py-2 px-4 rounded flex-none text-3xl max-h-500px justify-start">test POST and GET
        </h1>
        <RequestsGET />
      </div>
      

    
  );
}

export default App;
