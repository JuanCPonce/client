import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateWorkout = () => {
    const [title, setTitle] = useState('');
    const [exercises, setExercises] = useState([{ name: '', sets: '', reps: '', weight: '' }]);
    const navigate = useNavigate();

    console.log("CreateWorkout");

    const handleInputChange = (index, event) => {
        const values = [...exercises];
        values[index][event.target.name] = event.target.value;
        setExercises(values);
    };

    const addExercise = () => {
        setExercises([...exercises, { name: '', sets: '', reps: '', weight: '' }]);
    };

    const removeExercise = (index) => {
        const values = [...exercises];
        values.splice(index, 1);
        setExercises(values);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post('/api/workouts', { title, exercises });
        navigate.push('/');
    };

    return (
        <div>
            <h2>Create Workout</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Workout Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                {exercises.map((exercise, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Exercise Name"
                            value={exercise.name}
                            onChange={(e) => handleInputChange(index, e)}
                            required
                        />
                        <input
                            type="number"
                            name="sets"
                            placeholder="Sets"
                            value={exercise.sets}
                            onChange={(e) => handleInputChange(index, e)}
                            required
                        />
                        <input
                            type="number"
                            name="reps"
                            placeholder="Reps"
                            value={exercise.reps}
                            onChange={(e) => handleInputChange(index, e)}
                            required
                        />
                        <input
                            type="number"
                            name="weight"
                            placeholder="Weight"
                            value={exercise.weight}
                            onChange={(e) => handleInputChange(index, e)}
                            required
                        />
                        <button type="button" onClick={() => removeExercise(index)}>Remove</button>
                    </div>
                ))}
                <button type="button" onClick={addExercise}>Add Exercise</button>
                <button type="submit">Create Workout</button>
            </form>
        </div>
    );
};

export default CreateWorkout;
