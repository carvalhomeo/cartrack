import { Route, Switch } from 'react-router-dom'
import AirplaneDetail from '../pages/AirplaneDetail';
import Flights from '../pages/Flights';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Flights} />
            <Route path="/airplaneDetail/:icao"  component={AirplaneDetail} />
        </Switch>
    )
}

export default Routes;
