import {ComponentType} from "react";

export interface IRouter {
    path: string
    component: ComponentType;
    exact: boolean
}

export enum RouterNames {
    HOME = '/',
}
export const publicRouters: IRouter[] = []

export const privateRouters: IRouter[] = []
