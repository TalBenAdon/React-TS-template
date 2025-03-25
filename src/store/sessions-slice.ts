import { createSlice } from "@reduxjs/toolkit";

type Session = {
    id: string;
    title: string;
    summary: string;
    description: string;
    duration: number;
    date: string;
    image: string;
}

type SessionsState = {
    sessions: Session[]
}

const initialState: SessionsState = {
    sessions: []
}
export const sessionsSlice = createSlice({
    name: 'sessions',
    initialState,
    reducers: {
        addToUserSessions() { },
        removeFromUserSessions() { },
    }
})