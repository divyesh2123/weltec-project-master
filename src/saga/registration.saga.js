import { takeLatest, takeLeading } from "redux-saga/effects";
import { registrationRequest } from "../slice/registration.slice";


function* asynRegistration()
{

}

function* watcherRegistration()
{
    yield takeLeading(registrationRequest().type,asynRegistration)
}