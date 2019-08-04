export const enum UserInterfaceAction {
    SET_LOADING_STATE = '@@ui/SET_LOADING_STATE',
    SET_ERROR_STATE = '@@ui/SET_ERROR_STATE',
}
export const enum LoadingKey {
    GET_ALL_TRACKS = "GET_ALL_TRACKS"
}

export const enum ErrorKey {
    GET_ALL_TRACKS = "GET_ALL_TRACKS"
}

export interface UserInterfaceState {
    loading: {[key: string] : boolean}
    errors: {[key: string] : boolean}
}