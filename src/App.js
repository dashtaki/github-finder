import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Search from './component/search/Search';

// TODO: add prettier
// TODO: Add styled-component

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path={'/'} exact component={Search}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;

