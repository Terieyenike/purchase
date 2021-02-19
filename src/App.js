import Personal from './components/PersonalInfo';
import Bill from './components/Billing/Bill';
import Pay from './components/Payment/Payment';
import Error from './components/Error/404';
import Navbar from './components/Navbar/Navbar';
import { Route, Switch } from 'react-router-dom';
import './index.css';
import GlobalStyle from './GlobalStyle';
function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path='/' component={Personal} />
        <Route path='/bill' component={Bill} />
        <Route path='/pay' component={Pay} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
