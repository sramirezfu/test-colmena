import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Post } from '@/interfaces/interfaces';

interface PostState {
    postList: Post[];
    postId: number
}

const initialState: PostState = {
    postList: [],
    postId: 100
}

const postStoreSlice = createSlice({
    name: 'postStore',
    initialState,
    reducers: {
        setPostList(state, action: PayloadAction<Post[]>) {
            state.postList = action.payload;
        },
        setPostId(state, action: PayloadAction<number>) {
            state.postId = action.payload;
        },
    }
});

export const { setPostList, setPostId } = postStoreSlice.actions;

export default postStoreSlice.reducer;