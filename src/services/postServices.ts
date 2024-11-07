import { apiPost } from "@/http";
import { Post } from "@/interfaces/interfaces";

export const getPostList = async (query: string) => {
    try {
        const data = await apiPost.get<Post[]>(`/${query}`);
        return data;
    } catch (error) {
        console.error("Error getting post list:", error);
        throw error;
    }
}

export const getPostById = async (id: number) => {
    try {
        const data = await apiPost.get<Post>(`/posts/${id}`);
        return data;
    } catch (error) {
        console.error("Error getting post by id:", error);
        throw error;
    }
}