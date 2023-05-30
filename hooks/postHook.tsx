import axios from 'axios';
import { useSession } from 'next-auth/react';
import { IAddPropertyFormProps } from '../modules/sell/AddProperty';


export const PostData = async (url:string, data: IAddPropertyFormProps) => {
  
  const {data:session}:any = useSession()
 const token = (session?.user?.token)
 const headers = {
  'Authorization': `Bearer ${token}`
};
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
