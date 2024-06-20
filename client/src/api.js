// src/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api/v1/cats',
});

export const getAllCats = (params) => api.get('/', { params });
export const getCat = (id) => api.get(`/${id}`);
export const createCat = (cat) => api.post('/', cat);
export const updateCat = (id, updatedCat) => api.patch(`/${id}`, updatedCat);
export const deleteCat = (id) => api.delete(`/${id}`);

const customerApi = axios.create({
    baseURL: 'http://localhost:5000/api/v1/customers',
});

export const getAllCustomers = (params) => customerApi.get('/', { params });
export const getCustomer = (id) => customerApi.get(`/${id}`);
export const createCustomer = (customer) => customerApi.post('/', customer);
export const updateCustomer = (id, updatedCustomer) => customerApi.patch(`/${id}`, updatedCustomer);
export const deleteCustomer = (id) => customerApi.delete(`/${id}`);
