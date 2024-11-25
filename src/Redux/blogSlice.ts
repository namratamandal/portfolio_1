import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the structure of the blog state
interface BlogState {
  blogs: {
    id: number; // Unique identifier for each blog
    likes: number; // Number of likes for the blog
    comments: number; // Number of comments for the blog
    emojis: { [key: string]: number }; // Emojis and their respective counts
    commentList: string[]; // List of actual comments for the blog
  }[];
}

// Initial state of the blog, containing three sample blog entries
const initialState: BlogState = {
  blogs: [
    {
      id: 1,
      likes: 0,
      comments: 0,
      emojis: { "👍": 0, "❤️": 0, "😂": 0 },
      commentList: [], // Initialize with an empty comment list
    },
    {
      id: 2,
      likes: 0,
      comments: 0,
      emojis: { "👍": 0, "❤️": 0, "😂": 0 },
      commentList: [],
    },
    {
      id: 3,
      likes: 0,
      comments: 0,
      emojis: { "👍": 0, "❤️": 0, "😂": 0 },
      commentList: [],
    },
  ],
};

// Create the Redux slice for blogs
const blogSlice = createSlice({
  name: "blog", // Name of the slice
  initialState, // Initial state of the slice
  reducers: {
    // Reducer to increment the like count for a specific blog
    incrementLikes(state, action: PayloadAction<number>) {
      const blog = state.blogs.find((b) => b.id === action.payload);
      if (blog) blog.likes++;
    },
    // Reducer to increment the comment count for a specific blog and add a new comment
    addComment(state, action: PayloadAction<{ id: number; comment: string }>) {
      const blog = state.blogs.find((b) => b.id === action.payload.id);
      if (blog) {
        blog.comments++; // Increment the comment count
        blog.commentList.push(action.payload.comment); // Add the new comment to the list
      }
    },
    // Reducer to increment a specific emoji count for a specific blog
    addEmoji(state, action: PayloadAction<{ id: number; emoji: string }>) {
      const blog = state.blogs.find((b) => b.id === action.payload.id);
      if (blog && blog.emojis[action.payload.emoji] !== undefined) {
        blog.emojis[action.payload.emoji]++;
      }
    },
  },
});

// Export the actions for use in components
export const { incrementLikes, addComment, addEmoji } = blogSlice.actions;

// Export the reducer to be added to the Redux store
export default blogSlice.reducer;
