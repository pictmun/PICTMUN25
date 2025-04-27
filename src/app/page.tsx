import AboutClub from "@/components/Home/AboutClub";
import Landing from "@/components/Home/Landing";
import OurNewsletter from "@/components/Home/OurNewsletter";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Landing/>
      <AboutClub/>
      <OurNewsletter/>
    </div>
  );
}
