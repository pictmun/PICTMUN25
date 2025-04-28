import { Timeline } from "@/components/ui/timeline"
import { CircleDollarSign, Speech, Users } from "lucide-react"

const page = () => {
const data = [
  {
    title: "2017",
    content: (
      <div className="">
        <p className="flex gap-2 items-center justify-center">
          <CircleDollarSign className="text-gold" /> Prize Money: 30,000+
        </p>
        <br />
        <p className="flex gap-2 items-center justify-center">
          <Speech className="text-gold" /> Number of Delegates: 65+
        </p>
        <br />
        <p className="flex gap-2 items-center justify-center">
          <Users className="text-gold" /> Organising Committee: 32
        </p>
        <br />
      </div>
    ),
  },
  {
    title: "2018",
    content: (
      <div>
        <p className="flex gap-2 items-center justify-center">
          <CircleDollarSign className="text-gold" /> Prize Money: 50,000+
        </p>
        <br />
        <p className="flex gap-2 items-center justify-center">
          <Speech className="text-gold" /> Number of Delegates: 75+
        </p>
        <br />
        <p className="flex gap-2 items-center justify-center">
          <Users className="text-gold" /> Organising Committee: 26
        </p>
        <br />
      </div>
    ),
  },
  {
    title: "2020",
    content: (
      <div>
        <p className="flex gap-2 items-center justify-center">
          <CircleDollarSign className="text-gold" /> Prize Money: 80,000+
        </p>
        <br />
        <p className="flex gap-2 items-center justify-center">
          <Speech className="text-gold" /> Number of Delegates: 180+
        </p>
        <br />
        <p className="flex gap-2 items-center justify-center">
          <Users className="text-gold" /> Organising Committee: 37
        </p>
        <br />
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <p className="flex gap-2 items-center justify-center">
          <CircleDollarSign className="text-gold" /> Prize Money: 65,000+
        </p>
        <br />
        <p className="flex gap-2 items-center justify-center">
          <Speech className="text-gold" /> Number of Delegates: 76+
        </p>
        <br />
        <p className="flex gap-2 items-center justify-center">
          <Users className="text-gold" /> Organising Committee: 34
        </p>
        <br />
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <p className="flex gap-2 items-center justify-center">
          <CircleDollarSign className="text-gold" /> Prize Money: 120,000+
        </p>
        <br />
        <p className="flex gap-2 items-center justify-center">
          <Speech className="text-gold" /> Number of Delegates: 210+
        </p>
        <br />
        <p className="flex gap-2 items-center justify-center">
          <Users className="text-gold" /> Organising Committee: 41
        </p>
        <br />
      </div>
    ),
  },
  {
    title: "2024",
    content: (
        <div>
            <p className="flex gap-2 items-center justify-center">
                <CircleDollarSign className="text-gold"/> Prize Money: 120,000+
            </p>
            <br/>
            <p className="flex gap-2 items-center justify-center">
                <Speech className="text-gold"/>Number of Delegates: 160+
                </p>
            <br/>
            <p className="flex gap-2 items-center justify-center">
                <Users className="text-gold"/>Organising Committee: 41
            </p>
            <br/>
        </div>
    )
},
];

  return (
    <section className="pt-24 min-h-screen w-full font-playfair">
        <h1 className="text-5xl text-center font-bold text-gold">Timeline</h1>
        <div className="relative w-full h-full pb-36 overflow-clip text-base lg:text-xl mx-auto text-slate-200 flex justify-center">
            <Timeline data={data.reverse()} />
        </div>
    </section>
  )
}

export default page