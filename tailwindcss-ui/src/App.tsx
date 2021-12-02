import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/structure/Header";
import SiteRoutes from "./routes/SiteRoutes";
function App() {
  return (
    <Router>
      <Header />
      <main className="max-w-1000 mx-auto px-6">
        <SiteRoutes />
      </main>
    </Router>
  );
}

export default App;
