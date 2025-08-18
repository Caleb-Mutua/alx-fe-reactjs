import React from "react";
import { useQuery } from "@tanstack/react-query";

// Fetch function
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

function PostsComponent() {
  const {
    data: posts,
    error,
    isLoading,
    isFetching,
    isError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,

    // 👇 React Query caching settings
    cacheTime: 1000 * 60 * 5, // 5 minutes in cache before garbage collected
    staleTime: 1000 * 30,     // Data considered fresh for 30s, avoids refetches
    refetchOnWindowFocus: false, // Don’t refetch when switching back to tab
    keepPreviousData: true,   // Keep old data while fetching new
  });

  if (isLoading) return <p className="text-gray-500">Loading posts...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Posts</h2>
      {isFetching && <p className="text-sm text-blue-500">Updating in background...</p>}
      <ul className="list-disc pl-5 space-y-2">
        {posts.map((post) => (
          <li key={post.id} className="border-b pb-2">
            <span className="font-medium">{post.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;

