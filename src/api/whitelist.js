import axios from 'axios'
import { server_url } from './config'

export const getPermissionForMintNFT = async (wallet_address) => {
    const requestUrl = `${server_url}/${wallet_address}`
    const response = await axios.get(requestUrl)
    return response.data
}