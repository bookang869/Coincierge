import { BrowserRouter, Switch, Route } from "react-router-dom"; // Switch => Routes from react-router-dom version 6
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

// path='/:BLANK' => a way to tell our URL will have a parameter
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <Coin />
        </Route>
        <Route path="/">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
