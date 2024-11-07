"use client";
import { use, useEffect, useState } from "react";
import { Post } from "@/interfaces/interfaces";
import { getPostById } from "@/services/postServices";
import { PostDetail } from "@/components";


interface Props {
    params: Promise<{
        id: number;
    }>;
}

const PostDetailPage = ({ params }: Props) => {
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
        <div className="container mx-auto p-4 mt-[150px]">
            <h1 className="text-primary text-[25px] font-bold">Post detail</h1>
            <PostDetail post={post} />
        </div>
    );
};

export default PostDetailPage;
