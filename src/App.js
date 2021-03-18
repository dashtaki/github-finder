import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Search from './component/search/Search';
import {TodoPrivateListQuery} from './component/Repositories/Repositories';

// TODO: add prettier
// TODO: Add styled-component
// TODO: redirect / to search
// TODO: lint-staged
// TODO: remove axios
// TODO: remove extra packages
// TODO: add SASS
// TODO: pagination
// TODO: Spinner
// TODO: README: SASS, Prettier, BEM, GraphQl, SOLID, Branching, pre-commit, styled-component, Pagination, Redux
//               , Optional points, Spinner


function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path={'/search'} exact component={Search}/>
                    <Route path={'/repositories/:username'} component={TodoPrivateListQuery}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
