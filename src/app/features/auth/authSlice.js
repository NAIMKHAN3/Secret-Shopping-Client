import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import auth from "../../../Pages/Firebase/firebase.config";
import { toast } from 'react-hot-toast'

const initialState = {
    user: { email: "", role: "" },
    isLoading: true,
    isError: false,
    error: ""
}

export const createUser = createAsyncThunk("auth/createUser", async ({ email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data.user.email;
})
export const loginUser = createAsyncThunk("auth/loginUser", async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    return data.user.email;
})
export const googleLogin = createAsyncThunk("auth/googleLogin", async () => {
    const googleProvider = new GoogleAuthProvider()
    const data = await signInWithPopup(auth, googleProvider);
    return data.user.email;
})
export const logOut = createAsyncThunk("auth/logOut", async () => {
    const data = await signOut(auth);
    return data;
})
export const getUserByEmail = createAsyncThunk("auth/getUserByEmail", async (email) => {
    const res = await fetch(`http://localhost:5000/user/${email}`)
    const data = await res.json();
    return data.data;
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state) => {
            state.user.email = "";
            state.isLoading = true;
            state.isError = false;
            state.error = ""
        })
            .addCase(createUser.fulfilled, (state, action) => {
                state.user.email = action.payload;
                state.user.role = "user";
                state.isLoading = false;
                state.isError = false;
                state.error = "";
                toast.success("Register Success")
            })
            .addCase(createUser.rejected, (state, action) => {
                state.user.email = "";
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                toast.error(action.error.message)
            })
            .addCase(loginUser.pending, (state) => {
                state.user.email = "";
                state.isLoading = true;
                state.isError = false;
                state.error = ""
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.user.email = payload;
                state.user.role = "user";
                state.isLoading = false;
                state.isError = false;
                state.error = "";
                toast.success("Login user success")
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.user.email = "";
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                toast.error(action.error.message)
            })
            .addCase(googleLogin.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = ""
            })
            .addCase(googleLogin.fulfilled, (state, action) => {
                state.user.email = action.payload;
                state.user.role = "user";
                state.isLoading = false;
                state.isError = false;
                state.error = "";
                toast.success("Google login Success")
            })
            .addCase(googleLogin.rejected, (state, action) => {
                state.user.email = "";
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            })
            .addCase(logOut.pending, (state) => {
                state.user.email = "";
                state.isLoading = true;
                state.isError = false;
                state.error = ""
            })
            .addCase(logOut.fulfilled, (state) => {
                state.user.email = "";
                state.isLoading = false;
                state.isError = false;
                state.error = ""
                toast.success("Successfully sign out")
            })
            .addCase(logOut.rejected, (state, action) => {
                state.user.email = "";
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                toast.error(action.error.message)
            })
            .addCase(getUserByEmail.pending, (state) => {
                state.user.email = "";
                state.isLoading = true;
                state.isError = false;
                state.error = ""
            })
            .addCase(getUserByEmail.fulfilled, (state, { payload }) => {
                state.user = payload;
                state.isLoading = false;
                state.isError = false;
                state.error = ""
            })
            .addCase(getUserByEmail.rejected, (state, action) => {
                state.user.email = "";
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                toast.error(action.error.message)
            })
    }
})

export const { setUser } = authSlice.actions;
export default authSlice.reducer;