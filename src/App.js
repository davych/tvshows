// import logo from './logo.svg';
import './App.css';
import SiteHeader from './components/SiteHeader';
import Main from './components/Main';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import TvShowList from './pages/TvShowList'
import TVShowPage from './components/TVShowPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SiteHeader />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TvShowList />} />
            <Route path=":id" element={<TVShowPage />} >
              <Route path="details" element={<TVShowPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        {/* <ShowIntro /> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div >
  );
}

export default App;
