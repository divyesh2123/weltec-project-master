import { configureStore } from "@reduxjs/toolkit";
import registrationRedcuer from "../slice/registration.slice";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../saga";

const sagaMiddleware = createSagaMiddleware()


const store = configureStore({
    reducer : {
        registration : registrationRedcuer
    },
    middleware: sagaMiddleware
})

sagaMiddleware.run(rootSaga);
export default store;