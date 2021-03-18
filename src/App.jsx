import Footer from "components/Footer";
import Header from "components/Header";
import BannerFeature from "features/BannerFeature";
import FormFeature from "features/FormFeature";
import { Route, Switch } from "react-router";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={BannerFeature} />
        <Route path="/form" component={FormFeature} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
