"use client";

import QuoteCard from "@/Components/QuoteCard";
import LoadingSpinner from "@/Components/LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./Redux/store";
import { useEffect } from "react";
import { getAllPosts } from "./Redux/post.slice";

export default function Home() {
  const { allPosts, status } = useSelector((state: RootState) => state.postSlice);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllPosts())
  }, [])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {status === "pending" && <LoadingSpinner />}

      {status === "fulfilled" && allPosts.length > 0 && (
        <div className="flex flex-wrap gap-6 justify-center">
          {allPosts.map((post) => (
            <QuoteCard key={post.id} data={post} />
          ))}
        </div>
      )}

      {status === "rejected" && <p className="text-red-500">Failed to load posts.</p>}
    </div>
  );
}
