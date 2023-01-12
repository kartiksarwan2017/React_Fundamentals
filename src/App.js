import './App.css';
import HelloWorld from './components/HelloWorld';
import Header from './components/Header/Header';
import Count from './components/Count';


function App() {

  const varname = {
    namer: "Kartik",
    title: "I Love React"
  }

  return (
    <div>
      {/* <HelloWorld name="Above Header" title="Iam the King" /> */}
      <Header />
      <HelloWorld h={varname} hh="I love React" />
      <Count />
    </div>
  );
}

export default App;
