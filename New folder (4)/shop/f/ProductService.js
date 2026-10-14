import axios from "axios";

const BASE_URL = "http://localhost:5000/product-api";

export const getAllProducts = async () => {
    return await axios.get(`${BASE_URL}/findall`);
};

export const addProduct = async (product) => {
    return await axios.post(`${BASE_URL}/save-product`, product);
};

export const updateProduct = async (product) => {
    return await axios.post(`${BASE_URL}/update`, product);
};

export const deleteProduct = async (id) => {
    return await axios.post(`${BASE_URL}/delete-by-id`, {
        _id: id
    });
};
