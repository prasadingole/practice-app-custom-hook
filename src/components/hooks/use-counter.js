import { useState , useEffect } from 'react'

const useCounter = (flag = true) => {
    const[counter,setCounter] = useState(0);

    useEffect(()=> {
        const interval = setInterval(()=> {
            setCounter((previousCounter) => previousCounter + (flag ? 1 : -1));
        },1000);
        return ()=> clearInterval(interval);
    },[flag]);

    return counter;
};

export default useCounter;