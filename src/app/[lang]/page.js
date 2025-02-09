import { fetchPageData } from "@/lib/api";
import ComponentRenderer from "@/components/ComponentRenderer";

export default async function Home({ params }) {
  const { lang } = await params;
  const pageData = await fetchPageData("home", lang);
  console.log(`Home Page URL: ${lang}/home`);
  return pageData?.components?.length ? (
    <ComponentRenderer components={pageData.components} />
  ) : null;
}
