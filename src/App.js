function App() {
  const data = () =>
    fetch("http://localhost:3000/booking-type", { method: "GET" }).then(
      (data) => console.log(data)
    );

  data();

  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
