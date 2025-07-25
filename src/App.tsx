import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RequestForm from "./pages/RequestForm";
import Loader from "./pages/Loader";
import Example from "./pages/Example";
import "./App.scss";

function App() {
  const [loading, setLoading] = useState(true);
  // Simulate loading state
  setTimeout(() => {
    setLoading(false);
  }, 1000); // This is just a placeholder for the loading simulation.

  return (
    <>
      <div className="App">
        <div className="App-header-container">
          <h1 className="App-header-text">מטה החמ״לים הארצי</h1>
        </div>
        <div>
          {loading ? (
            <Loader />
          ) : (
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/reqform" element={<RequestForm />} />
              <Route path="/example" element={<Example />} />
            </Routes>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
