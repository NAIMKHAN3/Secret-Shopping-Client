import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import auth from "../../../Pages/Firebase/firebase.config";
import { toast } from 'react-hot-toast'

const initialState = {
    email: "",
    role: "",
    isLoading: false,
    isError: false,
    error: ""
}

export const createUser = createAsyncThunk("auth/createUser", async ({ email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    console.log(data)
    return data.user.email;
})
export const loginUser = createAsyncThunk("auth/loginUser", async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    console.log(data)
    return data.user.email;
})
export const googleLogin = createAsyncThunk("auth/googleLogin", async () => {
    const googleProvider = new GoogleAuthProvider()
    const data = await signInWithPopup(auth, googleProvider);
    console.log(data)
    return data.user.email;
})
export const logOut = createAsyncThunk("auth/logOut", async ({ email, password }) => {

    const data = await signOut(auth);
    console.log(data)
    return data.user.email;
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state) => {
            state.email = "";
            state.role = "";
            state.isLoading = true;
            state.isError = false;
            state.error = ""
        })
            .addCase(createUser.fulfilled, (state, action) => {
                state.email = action.payload;
                state.role = "user";
                state.isLoading = false;
                state.isError = false;
                state.error = "";
                toast.success("Register Success")
            })
            .addCase(createUser.rejected, (state, action) => {
                state.email = "";
                state.role = "";
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                toast.error(action.error.message)
            })
            .addCase(loginUser.pending, (state) => {
                state.email = "";
                state.role = "";
                state.isLoading = true;
                state.isError = false;
                state.error = ""
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.email = action.payload;
                state.role = "user";
                state.isLoading = false;
                state.isError = false;
                state.error = "";
                toast.success("Login user success")
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.email = "";
                state.role = "";
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                toast.error(action.error.message)
            })
            .addCase(googleLogin.pending, (state) => {
                state.email = "";
                state.role = "";
                state.isLoading = true;
                state.isError = false;
                state.error = ""
            })
            .addCase(googleLogin.fulfilled, (state, action) => {
                state.email = action.payload;
                state.role = "user";
                state.isLoading = false;
                state.isError = false;
                state.error = "";
                toast.success("Google login Success")
            })
            .addCase(googleLogin.rejected, (state, action) => {
                state.email = "";
                state.role = "";
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            })
            .addCase(logOut.pending, (state) => {
                state.email = "";
                state.role = "";
                state.isLoading = true;
                state.isError = false;
                state.error = ""
            })
            .addCase(logOut.fulfilled, (state) => {
                state.email = "";
                state.role = "";
                state.isLoading = false;
                state.isError = false;
                state.error = ""
            })
            .addCase(logOut.rejected, (state, action) => {
                state.email = "";
                state.role = "";
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                toast.error(action.error.message)
            })
    }
})

export default authSlice.reducer;