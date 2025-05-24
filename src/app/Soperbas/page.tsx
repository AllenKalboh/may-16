'use client'
import React, { useEffect, useState } from 'react'
import { supabase } from '../CreateClient';

const Soperbas = () => {

    interface Tasks {
        id: number;
        title: string;
        description: string;
    }

    const [newTask, setNewTask] = useState({ title: "", description: "" });
    const [tasks, setTasks] = useState<Tasks[]>([]);
    const [newDescription, setNewDescription] = useState<string>();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const { error } = await supabase.from("tasks").insert(newTask).single();
        if (error) {
            console.error(error.message);
        } setNewTask({ title: "", description: "" })
    }

    const deleteTask = async (id: number) => {
        const { error } = await supabase.from("tasks").delete().eq('id', id);
        if (error) {
            console.error("Error Deleting Task. ", error.message);
        }
    }

    const updateTask = async (id: number) => {
        const { error } = await supabase.from("tasks").update({ description: newDescription }).eq("id", id);
        if (error) {
            console.error("Error Deleting Task. ", error.message);
        }
    }


    const fetchTasks = async () => {
        const { data, error } = await supabase.from("tasks").select("*").order("created_at", { ascending: true });
        if (error) {
            console.error(error.message);
            return;
        }
        if (data) {
            setTasks(data);
            console.log(data);
            fetchTasks();
        }
    }
    useEffect(() => {
        fetchTasks();
    }, [])

    console.log(tasks)


    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col '>
                <h1> Task Manager Crud </h1>
                <form onSubmit={handleSubmit} action="">

                    <input type="text" className='border-2 p-2 m-2' placeholder="task title" onChange={(e) => setNewTask((prev) => ({ ...prev, title: e.target.value }))} />

                    <input type="text" className='border-2 p-2 m-2' placeholder="task description" onChange={(e) => setNewTask((prev) => ({ ...prev, description: e.target.value }))} />

                    <button className='border-2 p-2 m-2 duration-300 hover:bg-gray-200'>Add Task </button>
                </form>
            </div>

            <div className='border-2 flex flex-col w-96'>
                {tasks?.map((task) => {
                    return (
                        <div key={task.id} className='border-2 p-2 m-2'>
                            <p> Title: {task.title}</p>
                            <p>Description: {task.description}</p>

                            <div>
                                <textarea placeholder="update description" onChange={(e) => setNewDescription(e.target.value)} />
                            </div>
                            <div className=''>
                                <button className='duration-300 hover:bg-gray-200 mx-1' onClick={() => updateTask(task.id)}>Edit</button>





                                <button className='duration-300 hover:bg-gray-200 mx-1' onClick={() => deleteTask(task.id)}>Delete</button>
                            </div>
                        </div>

                    )

                })}



            </div>

        </div >
    )
}

export default Soperbas
