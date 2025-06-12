import axios from "axios";

const axiosMethods = {
    get: axios.get,
    put: axios.put,
    post: axios.post,
    delete: axios.delete,
    patch: axios.patch,
    interceptors: axios.interceptors
}

export default axiosMethods;