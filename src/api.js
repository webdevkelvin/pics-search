import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID Sg5tw10qhS9jMc-FJD_RnVKh0mVcK2Di8_cYJzjJrdo",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
