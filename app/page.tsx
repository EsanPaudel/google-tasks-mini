"use client"
import Image from "next/image";
import { PlusCircle, CheckCircle, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="flex">
      <aside
        className={`fixed md:static  top-0 left-0 h-full w-64  border-r  p-4 transform transition-transform duration-300 ease-in-out z-50
     `}
      >
        {/* Create button */}
        <button className="w-full flex items-center justify-center py-2 mb-6 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700">
          + Create
        </button>

        {/* Menu options */}
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

        {/* Lists */}
        <div className="mt-6">
          <h3 className="text-gray-400 text-sm uppercase mb-2">Lists</h3>
          <div className="flex items-center px-3 py-2 bg-gray-800 rounded-lg text-white">
            <input type="checkbox" checked readOnly className="mr-2" />
            My Tasks <span className="ml-auto text-gray-400">1</span>
          </div>
          <button className="flex items-center w-full px-3 py-2 mt-2 text-gray-400 hover:bg-gray-800 rounded-lg">
            <PlusCircle className="w-5 h-5 mr-2" />
            Create new list
          </button>
        </div>
      </aside>
      <div className="flex items-center justify-center w-screen h-[88vh]">
     <div className="bg-[#121212] rounded-2xl p-6 w-full max-w-md mx-auto text-white shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">My Tasks</h2>
        <button className="text-gray-400 hover:text-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M6 10a2 2 0 114 0 2 2 0 01-4 0zm7 0a2 2 0 114 0 2 2 0 01-4 0zM5 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </button>
      </div>

      {/* Add Task */}
      <button className="mt-4 flex items-center gap-2 text-indigo-400 hover:text-indigo-300">
        <PlusCircle className="h-5 w-5" />
        <span className="text-sm font-medium">Add a task</span>
      </button>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center mt-16 mb-6">
        {/* Replace with your own illustration or image */}
        <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center">
          <span className="text-2xl">📋</span>
        </div>
        <p className="mt-6 text-base font-medium">No tasks yet</p>
        <p className="mt-1 text-sm text-gray-400 text-center max-w-xs">
          Add your to-dos and keep track of them across Google Workspace
        </p>
      </div>
    </div>
      </div>
    </div>
  );
}
