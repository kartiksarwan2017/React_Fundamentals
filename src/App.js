import './App.css';
import Header from './components/Header/Header';
import HelloWorld from './components/HelloWorld';
import Count from './components/Count';
import Example from './components/Example';

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
      <Example /> 
    </div>
  );
}

export default App;
