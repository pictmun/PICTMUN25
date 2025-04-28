import AboutClub from "@/components/Home/AboutClub";
import HomePageHighlights from "@/components/Home/HomePageHighlights";
import Landing from "@/components/Home/Landing";
import OurNewsletter from "@/components/Home/OurNewsletter";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Landing/>
      <AboutClub/>
      <OurNewsletter/>
      <HomePageHighlights/>
      <Testimonials/>
    </div>
  );
}
