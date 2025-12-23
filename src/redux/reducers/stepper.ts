import { createSlice } from "@reduxjs/toolkit";
interface StepperState {
    step: number
}
const instialState: StepperState = {
    step: 0
}
const Stepper = createSlice({
    name: 'stepper',
    initialState: instialState,
    reducers: {
        setStep: (state, actions) => {
            state.step = actions.payload
        }
    }
})
export const { setStep} = Stepper.actions
export default Stepper.reducer