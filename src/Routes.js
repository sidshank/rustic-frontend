import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Upload from "./containers/Upload";

export default function Routes({ filter }) {
//   const [filterParam, setFilterParam] = useState("");
//   if (filterParam !== filter) {
//       setFilterParam(filter);
//   }
  return (
    <Switch>
      <Route
        path="/" 
        exact
        render={(props) => <Home {...props} filterParam={filter} />}
      />
      <Route path="/upload/" exact component={Upload} />
      
      { /* THE LINE BELOW MUST ALWAYS BE THE LAST ROUTE */ }
      <Route component={NotFound} />
    </Switch>
  );
}