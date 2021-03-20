import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Search from './component/Search/Search';
import Repositories from './component/Repositories/Repositories';

// TODO: add prettier
// TODO: add SASS
// TODO: Typescript
// TODO: README: SASS, Prettier, BEM, GraphQl, SOLID, Branching, pre-commit, styled-component, Pagination, Redux-Jotai
// , Optional points, Spinner, remove my token and add it to README, Cypress


function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path={'/search'} exact component={Search}/>
                    <Route path={'/repositories/:username'} component={Repositories}/>
                    <Route exact path="/">
                        <Redirect to="/search" />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
