import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import Search from './component/SearchUser/SearchUser';
import Repositories from './component/Repositories/Repositories';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path={'/search'} exact component={Search} />
                    <Route
                        path={'/repositories/:username'}
                        component={Repositories}
                    />
                    <Route exact path="/">
                        <Redirect to="/search" />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
