function HelloWorld(props) {
  console.log(props);
    return (
      <div className="hello" style={{textAlign: "center", padding: "5%", color: "white", background: "blue"}}>
        <h1>{props.h.namer}</h1>
        <h3>{props.h.title}</h3>
        <p>{props.hh}</p>
      </div>
    );
  }
  
  export default HelloWorld;
  