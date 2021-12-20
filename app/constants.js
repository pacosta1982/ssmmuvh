import React from 'react';

//API URL
export const API_URL = 'https://d60d-190-104-177-82.ngrok.io/api/auth';

//API End Points
export const REGISTER = `${API_URL}/auth/register`;
export const LOGIN = `https://d60d-190-104-177-82.ngrok.io/api/auth/login`;
export const UPDATE_PROFILE = `${API_URL}/user`;
export const UPLOAD_IMAGE = `${API_URL}/user/upload`;
export const FORGOT_PASSWORD = `${API_URL}/auth/recover`;