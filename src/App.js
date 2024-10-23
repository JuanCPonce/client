import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WorkoutList from './components/WorkoutList';
import CreateWorkout from './components/CreateWorkout';
import EditWorkout from './components/EditWorkout';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={WorkoutList} />
                <Route path="/create" component={CreateWorkout} />
                <Route path="/edit/:id" component={EditWorkout} />
            </Switch>
        </Router>
    );
};

export default App;
