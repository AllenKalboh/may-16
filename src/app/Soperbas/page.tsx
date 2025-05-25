'use client'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { supabase } from '../CreateClient';
import Authent from '../components/Auth/page';
import { Session } from '@supabase/supabase-js';

const Soperbas = ({ session }: { session: Session }) => {

    interface Tasks {
        id: number;
        title: string;
        description: string;
        image_url: string;
    }

    const [newTask, setNewTask] = useState({ title: "", description: "" });
    const [tasks, setTasks] = useState<Tasks[]>([]);
    const [newDescription, setNewDescription] = useState<string>();

    const uploadImage = async (file: File): Promise<string | null> => {
        const filePath = `${file.name}-${Date.now()}`
        const { error } = await supabase.storage.from('tasks-images').upload(filePath, file)

        if (error) {
            console.error(error.message);
            return null;
        }

        const { data } = await supabase.storage.from('tasks-images').getPublicUrl(filePath);

        return data.publicUrl;
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        let imageUrl: string | null = null;
        if (taskImage) {
            imageUrl = await uploadImage(taskImage);
        }

        if (!newTask.title.trim() || !newTask.description.trim()) {
            console.warn("Please fill out all fields");
            return;
        }
        const { error } = await supabase.from("tasks").insert({ ...newTask, email: session.user.email, image_url: imageUrl }).single();
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
        const { data, error } = await supabase
            .from("tasks")
            .select("*")
            .order("created_at", { ascending: true });

        if (error) {
            console.error(error.message);
            return;
        }

        if (data) {
            setTasks(data);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, [])

    useEffect(() => {
        // const subscription = supabase.from('tasks').on
        // place we're broadcasting our messages to??? hah
        //                              Task Channel
        const channel = supabase.channel("tasks-channel")
        channel.on("postgres_changes", { event: "INSERT", schema: "public", table: "tasks" }, (payload) => {
            const newTask = payload.new as Tasks;
            setTasks((prev) => [...prev, newTask])
        }).subscribe((status) => {
            console.log("Subscription", status);
        })
    }, [])


    const [taskImage, setTaskImage] = useState<File | null>(null);
    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setTaskImage(e.target.files[0]);
        }
    }

    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col '>
                <h1> Task Manager Crud </h1>
                <form onSubmit={handleSubmit} action="">

                    <input type="text" className='border-2 p-2 m-2' placeholder="task title" onChange={(e) => setNewTask((prev) => ({ ...prev, title: e.target.value }))} />

                    <input type="text" className='border-2 p-2 m-2' placeholder="task description" onChange={(e) => setNewTask((prev) => ({ ...prev, description: e.target.value }))} />

                    <input type="file" accept="image/*" onChange={handleFileChange} />

                    <button className='border-2 p-2 m-2 duration-300 hover:bg-gray-200'>Add Task </button>
                </form>
            </div>

            <div className='border-2 flex flex-col w-96'>
                {tasks?.map((task) => {
                    return (
                        <div key={task.id} className='border-2 p-2 m-2'>
                            <p> Title: {task.title}</p>
                            <p>Description: {task.description}</p>
                            <img src={task.image_url} alt="" className='w-20' />
                            <div className='flex items-center'>
                                <p> Edit Desc:</p>
                                <textarea className="border-2 m-1 p-1" placeholder="update description" onChange={(e) => setNewDescription(e.target.value)} />
                            </div>
                            <div className='flex justify-center'>
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
