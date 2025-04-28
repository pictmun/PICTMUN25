import SponsorCard from "@/components/Sponsors/SponsorCards"

const page = () => {
  const sponsors = [
    { imgSrc: 'images/inquisitor/Issue17.jpeg', title: 'Issue 17.0 September 2024'},
    { imgSrc: 'images/inquisitor/Issue16.jpg', title: 'Issue 16.0 July 2024'},
    { imgSrc: 'images/inquisitor/Issue15.png', title: 'Issue 15.0 November 2023'},
    { imgSrc: 'images/inquisitor/Issue14.png', title: 'Issue 14.0 May 2022'},
    { imgSrc: 'images/inquisitor/Issue13.png', title: 'Issue 13.0 January 2022'},
  ]
  return (
    <section className="pt-24 min-h-screen font-playfair">
        <h1 className="text-5xl mb-20 text-center font-bold text-gold">Our Sponsors</h1>
        <div className="mt-20 grid w-[90%] lg:w-[75%] gap-6 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center">
            {sponsors.map((sponsor, index) => (
                <SponsorCard key={index} imgSrc={sponsor.imgSrc} title={sponsor.title} delay={100+(index*10)}/>
        ))}
        </div>
    </section>
  )
}

export default page
