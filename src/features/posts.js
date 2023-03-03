import { createSlice } from "@reduxjs/toolkit";
import { PostsData } from "../DummyDate";

export const postSlice = createSlice({
    name: "posts",
    initialState: { value: PostsData }, // PostsDateという配列を作成する
    reducers: {
        addPost: (state, action) => {
            state.value.push(action.payload); // 配列「PostsDate」にデータを入れる
        },

        deletePost: (state, action) => {
            state.value = state.value.filter((post) => post.id !== action.payload.id); //削除ボタンを押された投稿と現在の投稿のidが一致していれば削除
        },
    },
});

export const { addPost, deletePost } = postSlice.actions;
export default postSlice.reducer;