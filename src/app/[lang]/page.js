export const revalidate = 3600 * 6;
import { fetchPageData } from "@/lib/api";
import ComponentRenderer from "@/components/ComponentRenderer";

export default async function Home({ params }) {
  const { lang } = await params;
  const pageData = await fetchPageData("home", lang);
  return (
    <>
      {pageData?.components.length > 0 ? (
        <ComponentRenderer components={pageData?.components} />
      ) : (
        ""
      )}
    </>
  );
}
