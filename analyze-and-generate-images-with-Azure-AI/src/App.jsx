import "./App.css";

function App() {
  return (
    <>
      <h1>Titulo</h1>
      <form action="127.0.0.1" method="get">
        <input type="text" name="get_cat" placeholder="Esciba URL para anqalizar o testo para generar imagen" />
        <button>Analizar</button>
        <button type="submit">Genearr</button>
      </form>
    </>
  );
}

export default App;
