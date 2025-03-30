import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Session = {
    id: string;
    title: string;
    summary: string;
    description: string;
    duration: number;
    date: string;
    image: string;
}

type BookedSession = {
    id: string,
    title: string,
    summary: string,
    date: string,
}

type BookedSessionsState = {
    sessions: BookedSession[]
}

const initialState: BookedSessionsState = {
    sessions: []
}
export const sessionsSlice = createSlice({
    name: 'sessions',
    initialState,
    reducers: {
        BookSession(state, action: PayloadAction<BookedSession>) {
            const isBooked = state.sessions.some((session) => session.id === action.payload.id)
            if (!isBooked) {
                state.sessions.push(action.payload)
            }
            console.log(state.sessions);

        },
        CancelSession(state, action: PayloadAction<{ id: string }>) {
            state.sessions = state.sessions.filter((session) => session.id !== action.payload.id)
            console.log(state.sessions);
        },
    }
})

export const { BookSession, CancelSession } = sessionsSlice.actions;