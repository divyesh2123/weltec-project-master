import { all } from "redux-saga/effects"
import { watcherRegistration } from "./registration.saga";

function* rootSaga()
{
    return all([watcherRegistration()]);
}

export default rootSaga;
