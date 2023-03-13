import logo from './logo.svg';
import './App.css';
import './tailwind.css'

function App() {
  return (

    <div>
      <div className='Q1'>
        <div className='rounded-xl w-32 h-32 pl-8 pr-4 py-8 m-4 border border-gray-900	'>

        </div>
      </div>
      <div className='Q2 flex justify-center'>
        <p className='bg-green-200 text-red-400 min-w-min min-w-fit text-center w-16'>
          text
        </p>
      </div>
      <div className='Q3 mt-3 flex justify-center'>
        <button className='rounded-xl border p-2 bg-blue-400 text-white	hover:bg-blue-300'>
          Save changes
        </button>
      </div>
      <div className='Q4 mt-3 flex justify-center'>
        <button className='px-4 py-1 bg-blue-500 rounded-xl active:bg-blue-700 hover:bg-blue-600  focus:ring focus:ring-violet-300'>
          Button
        </button>
      </div>
      <div className='Q5 mt-3 flex justify-center'>
        <button className='bg-green-500 p-3 sm:bg-blue-500 md:bg-yellow-500 lg:bg-red-500 xl:bg-black-500 2xl:bg-gray-500'>
          Button
        </button>
      </div>
    </div>

  );
}

export default App;
