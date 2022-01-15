import {IUser} from "../../../models/IUser";

export interface AuthState {
    user: IUser;
}
export enum AuthActionEnum {
    SET_USER = "SET_USER",
}
export interface SetUserAction {
    type: AuthActionEnum.SET_USER;
    payload: IUser;
}

export type AuthAction = SetUserAction
