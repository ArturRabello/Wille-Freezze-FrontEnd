import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface User {
    fullName: string;
    email: string;
    cpf: string;
    dateOfBirth: string;
    password: string;
    confirmPassword: string;
}

interface sessionUser {
     currentUser: User | null;
     isLogged: boolean
}

interface AuthState {
    users: User[];
    error: String | null;
    sessionUser: sessionUser;
}

const initialState: AuthState = {
    users: JSON.parse(localStorage.getItem("users") || "[]"),
    error: null,
    sessionUser: {
        currentUser: JSON.parse(localStorage.getItem("currentUser") || "null"),
        isLogged: JSON.parse(localStorage.getItem("isLogged") || "false")
    }
    
};

const clearError = (state: AuthState) => state.error = null;

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        register(state, action: PayloadAction<User>){
            try{
                clearError(state);

                if (action.payload.password !== action.payload.confirmPassword) {
                    throw new Error("PASSWORDS_DONT_MATCH");
                }

                if (
                    !action.payload.fullName ||
                    !action.payload.email ||
                    !action.payload.cpf ||
                    !action.payload.dateOfBirth ||
                    !action.payload.password ||
                    !action.payload.confirmPassword
                ) {
                    throw new Error("EMPTY_FIELDS");
                }
                
                if(state.users.some((user) => user.email === action.payload.email || user.cpf === action.payload.cpf)){
                    throw new Error("USER_ALREADY_EXISTS");
                }

                state.users.push(action.payload);
                state.sessionUser.currentUser = action.payload;
                state.sessionUser.isLogged = true;
                localStorage.setItem("users", JSON.stringify(state.users));
                localStorage.setItem("currentUser", JSON.stringify(action.payload));
                localStorage.setItem("isLogged", JSON.stringify(true));

            }catch(error: any){
                switch (error.message) {
                    case "EMPTY_FIELDS":
                        state.error = "Todos os campos devem estar preenchidos";
                        break;
                    case "PASSWORDS_DONT_MATCH":
                        state.error = "As senhas não coincidem";
                        break;
                    case "USER_ALREADY_EXISTS":
                        state.error = "Usuário já cadastrado";
                        break;
                    default:
                        state.error = "Erro ao cadastrar usuário";
                        break;
                }
            }
        },
        login(state, action: PayloadAction<{email: string; password: string}>){
            try{
                clearError(state);

                if(!action.payload.email || !action.payload.password){
                    throw new Error("EMPTY_FIELDS");
                }

                const user = state.users.find(
                    (user) => user.email === action.payload.email && user.password === action.payload.password
                );

                if(user?.password !== action.payload.password){
                    throw new Error("INVALID_PASSWORD");
                }

                if(!user){
                    throw new Error("USER_NOT_FOUND");
                }

                state.sessionUser.currentUser = user ;
                state.sessionUser.isLogged = true;
                localStorage.setItem("currentUser", JSON.stringify(action.payload));
                localStorage.setItem("isLogged", JSON.stringify(true));



            }catch(error: any){
                switch(error.message){
                    case "EMPTY_FIELDS":
                        state.error = "Todos os campos devem estar preenchidos";
                        break;
                    case "USER_NOT_FOUND":
                        state.error = "Usuário não encontrado";
                        break;
                    case "INVALID_PASSWORD":
                        state.error = "Senha inválida";
                        break;
                    default:
                        state.error = "Ocorreu um erro ao fazer login";
                }
            }
        },
        islogout(state){
            state.sessionUser.isLogged = false;
            state.sessionUser.currentUser = null;
            localStorage.setItem("isLogged", JSON.stringify(false));
            localStorage.setItem("currentUser", JSON.stringify(null));

        },
        ClearError(state){
            clearError(state);
        }

    },
});

export const { register, login, islogout, ClearError } = authSlice.actions;
export default authSlice.reducer;