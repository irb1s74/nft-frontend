import {IUser} from "../../../models/IUser";

export interface AuthState {
    user: IUser;
}
export enum AuthActionEnum {
    SET_AUTH = "SET_AUTH",
}
export interface SetAuthAction {
    type: AuthActionEnum.SET_AUTH;
    payload: IUser;
}

export type AuthAction = SetAuthAction
