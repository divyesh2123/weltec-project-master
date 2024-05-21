import { call, put, takeLatest, takeLeading } from "redux-saga/effects";
import { registrationError, registrationRequest, registrationSuc } from "../slice/registration.slice";
import { registration } from "../service/registration.service";


function* asynRegistration(action)
{
    try
    {
        let data = yield call(registration,action.payload);
       yield  put(registrationSuc(data));
    }
    catch(error)
    {   
        yield  put(registrationError(error));
    

    }

}

function* watcherRegistration()
{
    yield takeLeading(registrationRequest().type,asynRegistration)
}