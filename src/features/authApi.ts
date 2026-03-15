import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthResponse, LoginCredentials, RegisterCredentials } from "@/types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL + "/auth" || "http://localhost:3000/api/auth",
    credentials: "include",
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    getMe: builder.query<AuthResponse, void>({
      query: () => "/me",
      providesTags: ["Auth"],
    }),
    register: builder.mutation<AuthResponse, RegisterCredentials>({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
      // Invalidate Auth cache so useGetMeQuery refetches with new credentials
      invalidatesTags: ["Auth"],
    }),
    login: builder.mutation<AuthResponse, LoginCredentials>({
      query: (userData) => ({
        url: "/login",
        method: "POST",
        body: userData,
      }),
      // Invalidate Auth cache so useGetMeQuery refetches with new credentials
      invalidatesTags: ["Auth"],
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useGetMeQuery,
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
} = authApi;
