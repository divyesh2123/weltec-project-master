import { configureStore } from "@reduxjs/toolkit";
import registrationRedcuer from "../slice/registration.slice";

const store = configureStore({
    reducer : {
        registration : registrationRedcuer
    }
})
export default store;