import axios from "axios";
import { createContext, useReducer } from "react";

import { apiEndPoint } from "./AuthActionType";

const authContext = createContext()
export default authContext;

const INITIAL_STATE = {
	user: null,
	isFetching: false,
	error: null,
	profile: null,
};

const reducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case "LOGIN_START":
			return {
				...state,
				user: null,
				isFetching: true,
				error: null,
				profile: null,
			};
		case "LOGIN_SUCCESS":
			localStorage.setItem("user", JSON.stringify(payload));
			return {
				...state,
				user: payload,
				isFetching: false,
				error: null,
				profile: null,
			};
		case "LOGIN_FAILURE":
			return {
				...state,
				user: null,
				isFetching: false,
				error: payload,
				profile: null,
			};
		case "LOGOUT":
			localStorage.removeItem("user");
			return {
				...state,
				user: null,
				isFetching: false,
				error: null,
				profile: null,
			};
		case "REGISTER_START":
			return {
				...state,
				user: null,
				isFetching: true,
				error: null,
				profile: null,
			};
		case "REGISTER_SUCCESS":
			localStorage.setItem("user", JSON.stringify(payload));
			return {
				...state,
				user: payload,
				isFetching: false,
				error: null,
				profile: null,
			};
		case "REGISTER_FAILURE":
			return {
				...state,
				user: null,
				isFetching: false,
				error: payload,
				profile: null,
			};
	}
};

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

	const loginUserAction = async (FormData) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			const res = await axios.post(
				`${apiEndPoint}/register`,
				FormData,
				config
			);
			console.log(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<authContext.Provider value={{ userAuth: state, loginUserAction }}>
			{children}
		</authContext.Provider>
	);
};
