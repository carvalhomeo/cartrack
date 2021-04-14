import { Route, Switch } from 'react-router-dom'
import Flights from '../pages/Flights';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Flights} />
            <Route path="/airplaneDetail"  component={Flights} />
        </Switch>
    )
}

export default Routes;
