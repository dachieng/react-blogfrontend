import axiosInstance from './axios';

const GET = axiosInstance.get;
const POST = axiosInstance.post;
const PUT = axiosInstance.put;
const DELETE = axiosInstance.delete;
const PATCH = axiosInstance.patch;

export { GET, POST, PUT, DELETE, PATCH };
