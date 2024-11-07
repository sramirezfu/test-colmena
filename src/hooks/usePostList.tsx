"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { Post } from "@/interfaces/interfaces";
import { getPostList } from "@/services/postServices";
import { setPostList } from "@/store/slices/postStoreSlice";
import { addLocalPostsList, deleteLocalPost, getLocalPosts } from "@/services";


export const usePostList = () => {

    const dispatch = useDispatch<AppDispatch>();
    const [posts, setPosts] = useState<Post[]>([]);
    const [postsLocal] = useState<Post[]>(getLocalPosts());
    const [page, setPage] = useState(1);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const res = await getPostList(`posts?_limit=12&_page=${page}`);
                const newPost = [...posts];
                setPosts([...newPost, ...res.data]);
                setHasMore(res.data.length > 0);
                addLocalPostsList([...newPost, ...res.data]);
            } catch (error) {
                console.log(error);
                setError('Error getting post')
            }
            setLoading(false);
        };
        fetchPosts();
    }, [page]);

    useEffect(() => {
        const postList = postsLocal.length > 0 ? [...postsLocal] : posts;
        const uniquePosts = postList.filter((value, index, self) =>
            index === self.findIndex((t) => (
                t.id === value.id
            ))
        );
        const filterPost = uniquePosts.filter((post) => post.title.toLowerCase().includes(filter.toLowerCase()));
        dispatch(setPostList(filterPost));
        addLocalPostsList(filterPost);
    }, [filter, posts]);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) return;
        setPage((prev) => prev + 1);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading]);

    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    };

    const handleDelete = (id: number) => {
        setError('Post delete successfuly');
        deleteLocalPost(id);
    };

    const handleClose = () => {
        setError(null);
    };

    return {
        // properties
        filter,
        loading,
        hasMore,
        error,
        // methods
        handleFilter,
        handleDelete,
        handleClose
    }
}
