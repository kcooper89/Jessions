import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
/* Components */

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


/* Pages */
import Employees from "./pages/employees";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route path="/" exact component={Employees} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
