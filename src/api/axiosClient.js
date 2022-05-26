import axios from "axios";


const axiosClient = axios.create({
    // baseURL: "http://192.168.1.6:5000/api",
    // baseURL: "http://localhost:5000/api",
    // baseURL: "https://shop-haidangke.herokuapp.com/api",
    baseURL: "https://server-thinkpro.herokuapp.com/api",
    // baseURL: "http://localhost:3000",

    headers: {
        "Content-Type": "application/json",
    },
});

// Cấu hình riêng cho axiosClient khi request & response --- axios không ảnh hưởng bởi file này

axiosClient.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosClient.interceptors.response.use(
    function (response) {
        return response.data;  // .data để lấy data
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default axiosClient;
