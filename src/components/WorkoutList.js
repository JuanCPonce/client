import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const WorkoutList = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetchWorkouts();
    }, []);

    const fetchWorkouts = async () => {
        const response = await axios.get('/api/workouts');
        setWorkouts(response.data);
    };

    const deleteWorkout = async (id) => {
        await axios.delete(`/api/workouts/${id}`);
        fetchWorkouts();
    };

    return (
        <div>
            <h2>All Workouts</h2>
            <Link to="/create">Add New Workout</Link>
            <ul>
                {workouts.map(workout => (
                    <li key={workout._id}>
                        <h3>{workout.title}</h3>
                        <button onClick={() => deleteWorkout(workout._id)}>Delete</button>
                        <Link to={`/edit/${workout._id}`}>Edit</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WorkoutList;
