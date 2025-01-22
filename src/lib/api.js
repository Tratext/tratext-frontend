import axios from "axios";
import { redirect } from "next/navigation";

const API_URL =
  `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api` ||
  "http://localhost:1337/api";
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${STRAPI_TOKEN}`,
  },
});

export const fetchLocales = async () => {
  const { data } = await axiosInstance.get("/i18n/locales");
  return data;
};

export const fetchGlobalData = async (locale = "en") => {
  try {
    const { data } = await axiosInstance.get(
      `/global?locale=${locale}&status=published&pLevel`
    );
    return data.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      redirect("/404");
    } else {
      console.error("Error fetching global data:", error);
    }
    throw error;
  }
};

export const fetchPageData = async (slug = "home", locale = "en") => {
  try {
    const { data } = await axiosInstance.get(
      `/pages?filters[slug][$eq]=${slug}&locale=${locale}&status=published&pLevel`
    );
    return data.data[0];
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export const fetchPricing = async (filter, locale = "en") => {
  const { from, to } = filter;
  const { data } = await axiosInstance.get(`/pricings`, {
    params: {
      locale,
      populate: [
        "specified_area.base_rate",
        "minimum_rate",
        "default_base_rate",
      ],
      "filters[from][$eq]": from,
      "filters[to][$eq]": to,
    },
  });
  return data?.data[0];
};
