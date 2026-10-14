
import axios from "axios";

const BASE_URL = "http://localhost:5000/employee-api";

// Get all employees
export const getAllEmployees = async () => {
    return await axios.get(`${BASE_URL}/findall`);
};

// Add employee
export const addEmployee = async (employee) => {
    return await axios.post(`${BASE_URL}/save-employee`, employee);
};

// Update employee
export const updateEmployee = async (employee) => {
    return await axios.post(`${BASE_URL}/update`, employee);
};

// Delete employee using MongoDB ID
export const deleteEmployee = async (id) => {
    return await axios.post(`${BASE_URL}/delete-by-id`, {
        _id: id
    });
};
