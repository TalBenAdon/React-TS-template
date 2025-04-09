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


type BookedSessionsState = Session[]


const initialState: BookedSessionsState = []

export const sessionsSlice = createSlice({
    name: 'sessions',
    initialState,
    reducers: {
        bookSession(state, action: PayloadAction<Session>) {
            const isBooked = state.some((session) => session.id === action.payload.id)
            if (!isBooked) {
                state.push(action.payload)
            }

        },
        cancelSession(state, action: PayloadAction<string>) {
            return state.filter((session) => session.id !== action.payload)
        },
    }
})

export const { bookSession, cancelSession } = sessionsSlice.actions;