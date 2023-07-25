import axios from "axios";

const APII_KEY = import.meta.env.VITE_API_KEY;
const URL = "https://newsapi.org/v2/everything?q=";
export async function getNews(query) {
  try {
    const response = await axios.get(`${URL}${query}&apiKey=${APII_KEY}`);
    const newsWithImages = response.data.articles.filter(
      (article) => article.urlToImage
    );
    return newsWithImages;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error; // Optionally, you can throw the error to handle it in the calling component
  }
}
