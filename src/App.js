import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkoutList from './components/WorkoutList';
import CreateWorkout from './components/CreateWorkout';
import EditWorkout from './components/EditWorkout';

const App = () =>  {
    console.log("App!");
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<WorkoutList />} />
                <Route path="/create" element={<CreateWorkout />} />
                <Route path="/edit/:id" element={<EditWorkout />} />
            </Routes>
        </Router>
    );
};

export default App;
