import './App.css';
import { Route, Switch } from 'react-router-dom';
import ProductList from './Components/ProductList';

import {useGlobalContext} from './context'
import ProductDetails from './Components/ProductDetails';




function App() {
 
  const {loading} = useGlobalContext();

  if(loading){
    return <h3>Loading Please Wait </h3>
  }
else
{
  return (
    <>
      
      <Switch>
            <Route exact path="/" component={ProductList} /> 
            <Route exact path="/products/:id" component={ProductDetails} /> 
            <Route path="*"> <h3>Not Found</h3> </Route> 
      </Switch>
    </>
  );
}
}
export default App;
