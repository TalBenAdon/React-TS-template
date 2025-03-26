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
        addToBookedSessions(state, action: PayloadAction<BookedSession>) {
            const sessionIndex = state.sessions.findIndex((session) => session.id === action.payload.id)
        },
        removeFromUserSessions() { },
    }
})