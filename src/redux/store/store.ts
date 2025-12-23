import { configureStore } from '@reduxjs/toolkit';
import Auth from '../reducers/auth'
import StepperState from '../reducers/stepper'
const store = configureStore({
    reducer: {
        auth: Auth,
        StepperState:StepperState
    },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
