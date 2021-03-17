import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Search from './component/search/Search';

// TODO: add prettier
// TODO: Add styled-component
// TODO: redirect / to search
// TODO: lint-staged
// TODO: remove axios
// TODO: remove extra packages

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path={'/search'} exact component={Search}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
