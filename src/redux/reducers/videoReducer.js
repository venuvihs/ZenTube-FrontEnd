import { VIDEO_SUMMARY_REQUEST, VIDEO_SUMMARY_SUCCESS, VIDEO_SUMMARY_FAIL } from "../ActionTypes"

export const summaryReducer = (state, action) => {
    switch (action.type) {
        case VIDEO_SUMMARY_REQUEST:
            return {
                loading: true, ...state
            }
        case VIDEO_SUMMARY_SUCCESS:
            return {
                loading: false,
                summary: action.payload
            }
        case VIDEO_SUMMARY_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}