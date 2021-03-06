import axios from "axios";
import {
    CREATE_ERRORS, 
    SET_LOADER, 
    CLOSE_LOADER, 
    REDIRECT_TRUE, 
    SET_MESSAGE,
    REMOVE_ERRORS,
    SET_POSTS,
} from "../types/PostTypes";


export const createAction = (postData) => {
	return async (dispatch, getState) => {
		const {
			AuthReducer: { token },
		} = getState();
		dispatch({ type: SET_LOADER });
		try {
			const config = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};
			const {
				data: { msg },
			} = await axios.post('/create_post', postData, config);
			dispatch({ type: CLOSE_LOADER });
			dispatch({ type: REMOVE_ERRORS });
			dispatch({ type: REDIRECT_TRUE });
			dispatch({ type: SET_MESSAGE, payload: msg });
		} catch (error) {
			console.log(error.response);
			const { errors } = error.response.data;
			dispatch({ type: CLOSE_LOADER });
			dispatch({ type: CREATE_ERRORS, payload: errors });
		}
	};
};



export const fetchPosts = (id) => {
	return async (dispatch, getState) => {
		const {
			AuthReducer: { token },
		} = getState();
		dispatch({ type: SET_LOADER });
		try {
			const config = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};
			const {
				data: { response},
			} = await axios.get(`/posts/${id}`, config);
			dispatch({ type: CLOSE_LOADER });
			dispatch({ type: SET_POSTS, payload: { response } });
		} catch (error) {
			dispatch({ type: CLOSE_LOADER });
		}
	};
};



export const everyRoom = (room) => {
	return async (dispatch, getState) => {
		const {
			AuthReducer: { token },
		} = getState();
		dispatch({ type: SET_LOADER });
		try {
			const config = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};
			const {
				data: { response},
			} = await axios.get(`/rooms/${room}`, config);
			dispatch({ type: CLOSE_LOADER });
			dispatch({ type: SET_POSTS, payload: { response } });
		} catch (error) {
			dispatch({ type: CLOSE_LOADER });
		}
	};
};

