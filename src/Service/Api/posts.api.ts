import axiosMethods from "../https/https";

const getApiPosts = async () => {
    const response =  await axiosMethods.get("https://dummyjson.com/quotes");
    console.log(response);
    return response.data.quotes;
}

export {
    getApiPosts,
}

