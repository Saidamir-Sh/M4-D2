import './App.css';
import MyNav from './MyNav';
import Footer from './Footer';
import Welcome from './Welcome';
import LatestRelease from './LatestRelease';


function App() {
  return (
    <div className="App">
        <MyNav />
        <Welcome />
        <LatestRelease />
        <Footer />
    </div>
  );
}

export default App;
