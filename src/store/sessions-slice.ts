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


type BookedSessionsState = {
    sessions: Session[]
}

const initialState: BookedSessionsState = {
    sessions: []
}
export const sessionsSlice = createSlice({
    name: 'sessions',
    initialState,
    reducers: {
        BookSession(state, action: PayloadAction<Session>) {
            const isBooked = state.sessions.some((session) => session.id === action.payload.id)
            if (!isBooked) {
                state.sessions.push(action.payload)
            }

        },
        CancelSession(state, action: PayloadAction<{ id: string }>) {
            state.sessions = state.sessions.filter((session) => session.id !== action.payload.id)
        },
    }
})

export const { BookSession, CancelSession } = sessionsSlice.actions;