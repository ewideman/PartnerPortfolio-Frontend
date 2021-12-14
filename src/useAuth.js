import {useState} from 'react';
const useAuth = () =>{
    const [user, setUser] = useState({});
    return [user, setUser];
}
export default useAuth;