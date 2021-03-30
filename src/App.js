//import logo from './logo.svg';
//import './App.css';
import SideBar from './components/SideBar';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
      <div style={{backgroundColor: "white", display:"flex"}}>
        <SideBar /> 
        <SearchBar />
        <Content />
      </div>
  );
}

export default App;
