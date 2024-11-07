import { Post } from "@/interfaces/interfaces";

export const getLocalPosts = (): Post[] => {
    return JSON.parse(localStorage.getItem('posts') || '[]');
};

export const addLocalPost = (post: Post) => {
    const posts = getLocalPosts();
    localStorage.setItem('posts', JSON.stringify([...posts, post]));
};

export const addLocalPostsList = (posts: Post[]) => {
    localStorage.setItem('posts', JSON.stringify([...posts]));
};

export const deleteLocalPost = (id: number) => {
    const posts = getLocalPosts();
    localStorage.setItem('posts', JSON.stringify(posts.filter(post => post.id !== id)));
};

export const updateLocalPost = (updatedPost: Post) => {
    const posts = getLocalPosts();
    localStorage.setItem('posts', JSON.stringify(posts.map(post => post.id === updatedPost.id ? updatedPost : post)));
};