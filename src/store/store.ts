import { configureStore } from "@reduxjs/toolkit";

import { sessionsSlice } from "./sessions-slice.ts";

export const store = configureStore({
    reducer: {
        sessions: sessionsSlice.reducer
    }
});