import { useEffect, useState } from 'react'
import useFetch from './useFetch';
import axios from 'axios';

const useUser = () => {
    const [user, setUser] = useState({});
    useEffect(function effectFunc() {
        // debugger
        fetch("http://localhost:8000/user")
        .then(res => res.json())
          .then((data) => 
          {
            console.log("FETCH: ", data)
            setUser({data})
          })
          .catch((err) => console.log(err))
      }, []);
    return user;
}

export default useUser;