import { configureStore } from "@reduxjs/toolkit";
import { sessionsSlice } from "./sessions-slice.ts";

// *** Store configuration for redux. We only have one slice *** // 

export const store = configureStore({
    reducer: {
        sessions: sessionsSlice.reducer
    }
});


export type RootState = ReturnType<typeof store.getState>  // we take the return type of the type of "getState" method as our rootState type
export type AppDispatch = typeof store.dispatch;    // The type of our enitre redux tree 