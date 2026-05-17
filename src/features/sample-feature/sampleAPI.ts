import apiClient from '../../services/apiClient'; // Import the global service

export const fetchPosts = async () => {
  // This request ALREADY has the baseURL and the Auth Token attached!
  const response = await apiClient.get('/posts'); 
  return response.data;
};