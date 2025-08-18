import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

const PostsComponent = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    cacheTime: 1000 * 60 * 5, // 5 minutes
    staleTime: 1000 * 30, // 30 seconds
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  if (isLoading) return <p className="text-gray-500">Loading posts...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Posts</h2>

      <button
        onClick={() => refetch()}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul className="space-y-2">
        {data.slice(0, 5).map((post) => (
          <li key={post.id} className="p-3 bg-gray-100 rounded shadow">
            <h3 className="font-bold">{post.title}</h3>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
