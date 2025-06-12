import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getApiPosts } from "@/Service/Api/posts.api";

interface Quote {
    id: number;
    quote: string;
    author: string;
}

interface PostInitialState {
    allPosts: Quote[],
    status: "idle" | "fulfilled" | "rejected" | "pending"
}

export const getAllPosts = createAsyncThunk("getAllposts", async (_, { rejectWithValue }) => {
    try {
        const allUsers = await getApiPosts()
        return allUsers;
    } catch (error) {
        return rejectWithValue(error)
    }
});

const initialState: PostInitialState = {
    allPosts: [],
    status: "idle"
}

const postSlice = createSlice({
    name: "postSlice",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllPosts.pending, (state) => {
                state.status = "pending"
            }),
            builder.addCase(getAllPosts.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.allPosts = action.payload;
            }),
            builder.addCase(getAllPosts.rejected, (state) => {
                state.status = "rejected";
            })
    }
})

export const { } = postSlice.actions;
export default postSlice.reducer;