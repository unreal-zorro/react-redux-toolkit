import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

export const UserAPI = createApi({
  reducerPath: "UserAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/"
  }),
  endpoints: (build) => ({
    fetchAllUsers: build.query({
      query: () => ({
        url: "/users"
      })
    })
  })
});
