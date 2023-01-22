import './App.css';
import Header from './Header'
import Movie from './Movie'
import movieData from './data.json'

function App() {

  return (
    <div className='App'>
    <Header />
    <div className='main'>
      {
      movieData.map((ele)=>
      <Movie 
      title={ele.Title}
      year={ele.Year}
      img={ele.Poster}
      />

      )
      
    }
    </div>
    
    </div>
  );
}

export default App;
