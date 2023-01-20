import axios from 'axios';
import axiosClient from './client';
import {ProfileBodyType} from './types';

export const loginService = async (email: string, password: string) => {
  const form = new FormData();
  form.append('email', email);
  form.append('password', password);
  console.log('FORMDATA', form,{email,password})
  const res = await axiosClient.post('/auth/login', form, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return res.data;
}