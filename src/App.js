import './App.css';
import HelloWorld from './components/HelloWorld';
import Header from './components/Header/Header';
import Users from './components/Users';


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
      <Users />
    </div>
  );
}

export default App;
