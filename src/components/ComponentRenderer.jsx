import Hero from "@/components/Hero";
import ImageSlider from "@/components/ImageSlider";
import GridWithCenterdImage from "@/components/GridWithCenterdImage";
import TwoColumnHighlight from "@/components/TwoColumnHighlight";
import Testimonials from "@/components/Testimonials";
import FAQS from "@/components/FAQS";
import Banner from "@/components/Banner";
import PricingCalculator from "@/components/PricingCalculator";
import ProcessSteps from "@/components/ProcessSteps";
import CommonLanguage from "@/components/CommonLanguage";
import ContactUsWithoutObligation from "@/components/ContactUsWithoutObligation";
import ContactInformation from "@/components/ContactInformation";
import GridWithCards from "@/components/GridWithCards";
import HeroSimple from "@/components/HeroSimple";
import WhyChoose from "@/components/WhyChoose";
import Map from "@/components/Map";

const componentsMap = {
  "components.banner": Banner,
  "components.common-languages": CommonLanguage,
  "components.contact-hero": ContactUsWithoutObligation,
  "components.contact-information": ContactInformation,
  "components.faq": FAQS,
  "components.grid-with-cards": GridWithCards,
  "components.grid-with-centered-image": GridWithCenterdImage,
  "components.hero": Hero,
  "components.hero-simple": HeroSimple,
  "components.image-slider": ImageSlider,
  "components.map": Map,
  "components.price-table": PricingCalculator,
  "components.process-steps": ProcessSteps,
  "components.testimonial": Testimonials,
  "components.two-column-highlight": TwoColumnHighlight,
  "components.why-choose": WhyChoose,
};
function ComponentRenderer({ components }) {
  return components?.map((componentData, key) => {
    const { shared_component } = componentData;
    const component = shared_component?.shared_component?.[0] || componentData;
    const Component = componentsMap[component.__component];
    if (!Component) {
      // console.warn(`Component for ${component.__component} not found.`);
      return null;
    }
    // return <span>{component.__component}</span>;
    return <Component key={key} {...component} />;
  });
}

export default ComponentRenderer;
