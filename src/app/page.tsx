import AboutClub from "@/components/Home/AboutClub";
import HomePageHighlights from "@/components/Home/HomePageHighlights";
import Landing from "@/components/Home/Landing";
import OurNewsletter from "@/components/Home/OurNewsletter";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Landing/>
      <AboutClub/>
      <OurNewsletter/>
      <HomePageHighlights/>
    </div>
  );
}
