import { notFound } from "next/navigation";
import ComponentRenderer from "@/components/ComponentRenderer";
import { fetchPageData, fetchAllPages } from "@/lib/api";

export async function generateStaticParams() {
  const pages = await fetchAllPages();

  if (!pages?.length) {
    console.warn("No pages fetched for static generation.");
    return [];
  }

  return pages
    .filter(({ slug }) => !!slug)
    ?.map(({ locale, slug }) => {
      // console.log(`Page URL: ${locale}/${slug}`);
      return {
        lang: locale,
        slug: slug.split("/"),
      };
    });
}

export default async function Page({ params }) {
  const { slug, lang } =  await params || {};

  if (!slug?.length || !lang) {
    console.warn("Missing slug or lang parameter.");
    return notFound();
  }

  const pageData = await fetchPageData(slug[slug?.length - 1], lang);

  if (!pageData) {
    console.warn(`No page data found for slug ${slug} and lang ${lang}`);
    return notFound();
  }
  console.log(`Page URL: ${lang}/${slug}`);
  return (
    <>
      {pageData?.components && pageData.components?.length > 0 ? (
        <ComponentRenderer components={pageData.components} />
      ) : (
        <div>No components found for this page.</div>
      )}
    </>
  );
}
