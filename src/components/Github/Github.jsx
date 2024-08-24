import react from 'react';
import { useLoaderData } from 'react-router-dom';


export default function Github() {
    const data = useLoaderData();
return(
<div className='bg-gray-600 text-white text-3xl text-center m-4 p-4'>
<img src={data.avatar_url} alt={data.name} className='rounded-full w-32 h-32 mx-auto mb-4' />
            Github Name: {data.name}
</div>
)
}



export const githubInfoLoader = async () => {
const response = await fetch(`https://api.github.com/users/sigma1213`);
return  response.json();
}    