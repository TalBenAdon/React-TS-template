import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


// *** the session slice of the redux tool *** // 


// The main session type, therefor exported (no need for types file in this scale of project)
export type Session = {
    id: string;
    title: string;
    summary: string;
    description: string;
    duration: number;
    date: string;
    image: string;
}

// Booked sessions type is an array of sessions
type BookedSessionsState = Session[]

// The initial slice state in an empty array of BookedSessions
const initialState: BookedSessionsState = []

export const sessionsSlice = createSlice({
    name: 'sessions',
    initialState,
    reducers: {

        // PayloadAction describes the type held by the payload of the action. in This case the, action.payload should hold a whole session object.
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