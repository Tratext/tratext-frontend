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
  try {
    const { data } = await axiosInstance.get("/i18n/locales")
    return data
  } catch (error) {
    console.error("Error fetching locales:", error)
    return []
  }
}

export const fetchPagesForLanguage = async (locale) => {
  try {
    const { data } = await axiosInstance.get(`/pages?locale=${locale}&fields[0]=slug&pagination[page]=1&pagination[pageSize]=5`)
    if (!data || !data.data || !Array.isArray(data.data)) {
      console.error(`Unexpected data structure for locale ${locale}:`, data)
      return []
    }
    return data.data
      .map((page) => {
        if (!page || !page.slug) {
          console.error(`Invalid page data for locale ${locale}:`, page)
          return null
        }
        return { slug: page.slug, locale }
      })
      .filter(Boolean)
  } catch (error) {
    console.error(`Error fetching pages for language ${locale}:`, error)
    return []
  }
}

export const fetchAllPages = async () => {
  try {
    const locales = await fetchLocales()
    if (!locales || !Array.isArray(locales)) {
      console.error("Invalid locales data:", locales)
      return []
    }
    const allPagesPromises = locales.map((locale) => fetchPagesForLanguage(locale.code))
    const pagesPerLocale = await Promise.all(allPagesPromises)
    return pagesPerLocale.flat()
  } catch (error) {
    console.error("Error fetching all pages:", error)
    return []
  }
}


export const fetchGlobalData = async (locale = "en") => {
  console.log("Global Data - ", locale);
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
  console.log("Page Data - ", locale, " - ", slug);
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
