import { call, put, takeEvery } from "redux-saga/effects";
import { getUsersSuccess } from "../slice/usersSlice";

function* workGetUsersFetch() {
  const user = yield call(() => fetch("MOCK_DATA.json"));

  const formattedusers = yield user.json();

  yield put(getUsersSuccess(formattedusers));
}

function* usersSaga() {
  yield takeEvery("users/getUsersFetch", workGetUsersFetch);
}

export default usersSaga;
