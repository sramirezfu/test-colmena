"use client";
import { PostEdit } from "@/components";

const CreatePost = () => {
    return (
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 mt-[12rem]">
            <h1 className="text-3xl font-bold text-gray-700 mb-4">Create Post</h1>
            <PostEdit />
        </div>
    );
};

export default CreatePost;