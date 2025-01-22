export const dynamic = "force-dynamic";
import { fetchPageData } from "@/lib/api";
import ComponentRenderer from "@/components/ComponentRenderer";

export default async function Home({ params }) {
  const { lang } = await params;
  const pageData = await fetchPageData("home", lang);
  return (
    <>
      <ComponentRenderer components={pageData?.components} />
    </>
  );
}
