import * as constants from "../constants";
import axios from "axios";

export interface GetPictures {
	type: constants.GET_PICTURES;
	pictures: object;
}

export interface GetPicturesFromUser {
	type: constants.GET_PICTURES_USER;
	pictures: object;
}

export interface FetchError {
	type: constants.FETCH_ERROR;
	customMessage: string;
	error: object;
}

export type PicturesPanelAction = GetPictures | FetchError | GetPicturesFromUser;

function getPictures(pictures) : GetPictures {
	return {
		type: "GET_PICTURES",
		pictures,
	};
}

function getPicturesFromUser(pictures) : GetPicturesFromUser {
	return {
		type: "GET_PICTURES_USER",
		pictures,
	};
}

function fetchError(customMessage, error) : FetchError {
	return {
		type: "FETCH_ERROR",
		customMessage,
		error,
	};
}

// API

function fetchAllPictures(page, perPage) {
	return axios.get(`http://api.ugram.net/pictures?page=${page}&perPage=${perPage}`);
}

function fetchAllPicturesFromUser(page, perPage, userId) {
	return axios.get(`http://api.ugram.net/users/${userId}/pictures?page=${page}&perPage=${perPage}`);
}

//

export function getAllPictures(page, perPage) {
	return function (dispatch) {
		return fetchAllPictures(page, perPage).then(
			pictures => dispatch(getPictures(pictures)),
			error => dispatch(fetchError("Get all pictures", error))
		);
	};
}

export function getAllPicturesFromUser(page, perPage, userId) {
	return function (dispatch) {
		return fetchAllPicturesFromUser(page, perPage, userId).then(
			pictures => dispatch(getPicturesFromUser(pictures)),
			error => dispatch(fetchError("Get all pictures from user", error))
		);
	};
}