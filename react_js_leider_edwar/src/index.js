import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import LoginPages from "./pages/LoginPages.js";
import Dashboard from "./pages/Dashboard.js";

function Index() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={LoginPages} />
        <Route exact path="/dashboard" component={Dashboard} />
      </div>
        
    </BrowserRouter>
  );
}

export default Index;
