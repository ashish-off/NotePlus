import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath : "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/api/auth",
        credentials: "include", // sends cookie automatically
    }),
    endpoints : (builder) => ({
        // register  
        register : builder.mutation({
            query : (userData) => ({
                url : "/register",
                method : "POST",
                body : userData
            })
        }),
        // login
        login : builder.mutation({
            query : (userData) => ({
                url : "/login",
                method : "POST",
                body : userData
            })
        }),
        //logout
        logout : builder.mutation({
            query : () => ({
                url : "/logout",
                method : "POST"
            })
        })
    })
})

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } = authApi;