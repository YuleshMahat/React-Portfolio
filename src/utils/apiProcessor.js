import axios from "axios";

export const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL + "/api";
export const userId = "691ee1dae300982deb56afbc";

export const apiProcessor = async ({ method, url, data }) => {
  try {
    let response = await axios({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: "An error occurred while processing your request.",
    };
  }
};
