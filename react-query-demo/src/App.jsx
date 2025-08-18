
import './App.css'


// src/App.jsx
import PostsComponent from "./components/PostsComponent";

export default function App() {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">React Query Demo</h1>
      <PostsComponent />
    </div>
  );
}
