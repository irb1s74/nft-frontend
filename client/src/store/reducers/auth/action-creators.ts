import {IUser} from "../../../models/IUser";
import {AuthActionEnum, SetUserAction} from "./types";
import {AppDispatch} from "../../index";
import {ethers} from "ethers";


export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    logIn: () => async (dispatch: AppDispatch) => {
        try {
            if (!window.ethereum) {
                throw new Error('Please install metaMask')
            }
            await window.ethereum.request({method: 'eth_requestAccounts'})
                .then((address: string) => {
                    window.ethereum.request({
                        method: 'eth_getBalance',
                        params: [address[0], 'latest']
                    }).then((res: any) => {
                        dispatch(AuthActionCreators.setUser(
                                {
                                    walletAddress: address[0],
                                    walletBalance: ethers.utils.formatEther(res),
                                    nickname: address[0],
                                    about: '',
                                    banner: '',
                                    avatar: '',
                                }
                            )
                        )
                    })
                })
        } catch (e) {
            console.log(e)
        }
    },
    logOut: () => (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setUser(
                    {
                        walletAddress: '',
                        walletBalance: '',
                        nickname: '',
                        about: '',
                        banner: '',
                        avatar: '',
                    }
                )
            )
        } catch (e) {
            console.log(e)
        }
    }
}