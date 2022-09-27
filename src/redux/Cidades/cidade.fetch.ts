import axios from "axios";

export default function cidadefetch() 
{
    return axios.get('cities').
    then(response=> console.log(response.data)).
    catch(error=> console.log(error))
}