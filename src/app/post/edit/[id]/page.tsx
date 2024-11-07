"use client";
import { useState, useEffect, use } from 'react';
import { Post } from '@/interfaces/interfaces';
import { getPostById } from '@/services/postServices';
import { PostEdit } from '@/components';

interface Props {
    params: Promise<{
        id: number;
    }>;
}

const EditPost = ({ params }: Props) => {
    const { id } = use(params);
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        if (id) {
            const fetchPost = async () => {
                const res = await getPostById(id);
                setPost(res.data);
            };
            fetchPost();
        }
    }, [id]);

    if (!post) return <p>Loading...</p>;

    return (
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 mt-[12rem]">
            <h1 className="text-3xl font-bold text-gray-700 mb-4">Edit Post</h1>
            <PostEdit post={post} />
        </div>
    );
};

export default EditPost;
