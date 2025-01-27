export const revalidate = 21600; //3600 * 6;
import { notFound } from "next/navigation";
import ComponentRenderer from "@/components/ComponentRenderer";
import { fetchPageData, fetchAllPages } from "@/lib/api";


export async function generateStaticParams() {
  const pages = await fetchAllPages();

  if (!pages || pages.length === 0) {
    console.warn("No pages fetched for static generation");
    return [];
  }

  return pages.map((page) => ({
    lang: page.locale,
    slug: page.slug.split("/"),
  }));
}

export default async function Page({ params }) {
  const { slug, lang } = params;

  if (!slug || !lang) {
    console.error("Missing slug or lang parameter");
    notFound();
  }

  const pageData = await fetchPageData(slug[slug.length - 1], lang);
  if (!pageData) {
    console.error(`No page data found for slug ${slug} and lang ${lang}`);
    notFound();
  }

  return (
    <>
      {pageData?.components && pageData.components.length > 0 ? (
        <ComponentRenderer components={pageData.components} />
      ) : (
        <div>No components found for this page.</div>
      )}
    </>
  );
}
