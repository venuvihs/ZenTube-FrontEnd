import { VIDEO_SUMMARY_REQUEST, VIDEO_SUMMARY_SUCCESS, VIDEO_SUMMARY_FAIL } from "../ActionTypes"
import axios from 'axios'

export const getSummary = (link) => async (dispatch) => {
    try {
        dispatch({ type: VIDEO_SUMMARY_REQUEST })

        const { data } = await axios.get(link)

        dispatch({ type: VIDEO_SUMMARY_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.message && error.response.data ? error.response.data : error.message
        })
    }
}