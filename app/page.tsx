"use client";
import { useSession } from "next-auth/react";
import { PlusCircle, CheckCircle, Star } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [addTaskMenu, setAddTaskMenu] = useState(false);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [tasks, setTasks] = useState<any[]>([]);
  const { data: session } = useSession();

  // fetch tasks
  useEffect(() => {
    if (session) {
      fetch("/api/tasks")
        .then((res) => res.json())
        .then((data) => setTasks(data));
    }
  }, [session]);

  const addTask = async () => {
    const res = await fetch("/api/addtask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, details }),
    });
    if (res.ok) {
      setTitle("");
      setDetails("");
      const newTask = await res.json();
      setTasks((prev) => [newTask, ...prev]); // update UI
      setAddTaskMenu(false);
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="fixed md:static hidden sm:block top-0 left-0 h-full w-64 border-r p-4">
        <button className="w-full flex items-center justify-center py-2 mb-6 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700">
          + Create
        </button>

        <div className="space-y-2">
          <button className="flex items-center w-full px-3 py-2 rounded-lg bg-blue-800 text-white">
            <CheckCircle className="w-5 h-5 mr-2" />
            All tasks
          </button>
          <button className="flex items-center w-full px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800">
            <Star className="w-5 h-5 mr-2" />
            Starred
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex items-center justify-center w-screen h-[88vh]">
        <div className="bg-[#121212] rounded-2xl p-6 w-full max-w-md mx-auto text-white shadow-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">My Tasks</h2>
          </div>

          {/* Add Task */}
          <button
            className="mt-4 flex items-center gap-2 text-indigo-400 hover:text-indigo-300"
            onClick={() => setAddTaskMenu(true)}
          >
            <PlusCircle className="h-5 w-5" />
            <span className="text-sm font-medium">Add a task</span>
          </button>

          {addTaskMenu ? (
            <div className="mt-4 flex flex-col gap-2">
              <input
                type="text"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="px-2 py-1 rounded"
              />
              <input
                type="text"
                placeholder="details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="px-2 py-1 rounded "
              />
              <button className="bg-blue-400 px-3 py-1 rounded" onClick={addTask}>
                Add
              </button>
            </div>
          ) : tasks.length === 0 ? (
            <div className="flex flex-col items-center justify-center mt-16 mb-6">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">📋</span>
              </div>
              <p className="mt-6 text-base font-medium">No tasks yet</p>
            </div>
          ) : (
            <ul className="mt-6 space-y-2">
              {tasks.map((task) => (
                <li key={task.id} className="bg-gray-800 px-3 py-2 rounded-lg">
                  <h4 className="font-medium">{task.title}</h4>
                  <p className="text-gray-400 text-sm">{task.details}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
