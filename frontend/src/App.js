import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <h2>Welcome</h2>
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default App;
