export const dynamic = "force-dynamic";
import { notFound } from "next/navigation";
import ComponentRenderer from "@/components/ComponentRenderer";

import { fetchPageData } from "@/lib/api";
export default async function Page({ params }) {
  const { slug, lang } = await params;

  const pageData = await fetchPageData(slug[slug.length - 1], lang);
  if (!pageData) {
    notFound();
  }
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
