import { selectIsLoggedIn } from "./authSlice"
import { useSelector } from 'react-redux'

const ShowOnLogin = ({children}) => {
    const isLoggedIn=useSelector(selectIsLoggedIn)

    if(isLoggedIn){

        return children
    }
 return null;
}
export const ShowOnLogOut = ({children}) => {
    const isLoggedIn=useSelector(selectIsLoggedIn)

    if(!isLoggedIn){

        return children
    }
 return null;
}

export default ShowOnLogin