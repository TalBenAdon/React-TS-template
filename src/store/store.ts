import { configureStore } from "@reduxjs/toolkit";

import { sessionsSlice } from "./sessions-slice.ts";

configureStore({
    reducer: {
        sessions: sessionsSlice.reducer
    }
});