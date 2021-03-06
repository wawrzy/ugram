import axios from "axios";
import * as constants from "../constants";
import { throwError } from "./Errors";
import { sendNotification } from "./Notifications";

export interface LoginUser {
	type: constants.LOGIN;
	tokenUrl: string;
}
export type LoginAction = LoginUser;

function redirectionToken(tokenUrl): LoginUser {
	return {
		tokenUrl,
		type: "LOGIN",
	};
}

function fetchLogin(formData) {
	return axios.post(`/login`, formData);
}

export function loginUser(formData) {
	return (dispatch) => {
		return fetchLogin(formData).then(
			(tokenUrl) => {
				dispatch(redirectionToken(tokenUrl.data));
				dispatch(sendNotification("Login successful!"));
			},
			(error) => dispatch(throwError("Login", error)),
		);
	};
}
