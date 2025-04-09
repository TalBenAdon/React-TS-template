import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "./store";

// ***custom redux dispatch and selector hooks *** // 

// Creating a custom type which is a function that returns the AppDispatch (type of store.dispatch)
type DispatchFunction = () => AppDispatch

// Attaches the hook to access redux dispatch function to our own typed function. No need to recreate those hooks for each slice. can be called useAppDispatch etc.
export const useBookedSessionsDispatch: DispatchFunction = useDispatch;

// Attaches the hook to access ridux store state to our own typed function. We continue to attach it with our RootState type
export const useBookedSessionsSelector: TypedUseSelectorHook<RootState> = useSelector