
function App() {

    const onClick = () => {
      console.log('Sad me')
    };
    return (
      <div className="App">
        <button onClick={onClick}> OK</button>
      </div>
    );
  
}

export default App;
