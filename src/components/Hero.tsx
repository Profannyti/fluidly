// Hero.jsx
import { title } from "process";
import Hero_Card from "./Hero_Card";

const layout = [
  [
    {
      width: "400px",
      height: "200px",
      title: `It’s not magic. It’s Fluidly.`,
      color: '#FF8BDC',
      fluidlyColor: '#773E8D',
    },
    {
      width: "200px",
      height: "200px",
      title: `It’s not magic. It’s Fluidly.`,
      color: '#773E8D',
      fluidlyColor: '#FF8BDC',
    },
  ],
  [
    {
      width: "200px",
      height: "200px",
      title: `It’s not magic. It’s Fluidly.`,
      color: '#3FCBFF',
      fluidlyColor: '#142042',
    },
    {
      width: "400px",
      height: "200px",
      title: `It’s not magic. It’s Fluidly.`,
      color: '#E5FF8E',
      fluidlyColor: '#282828',
    },
  ],
  [
    {
      width: "400px",
      height: "200px",
      title: `It’s not magic. It’s Fluidly.`,
      color: '#1F596E',
      fluidlyColor: '#3FCAFF',
    },
    {
      width: "200px",
      height: "200px",
      title: `It’s not magic. It’s Fluidly.`,
      color: '#8FA1C2',
      fluidlyColor: '#282828',
    },
  ],
];


const Hero = () => {
  return (
    <div className="flex flex-col gap-3 ">
      {layout.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-col gap-2 lg:flex-row">
          {row.map((card, cardIndex) => (
            <Hero_Card
              key={cardIndex}
              width={card.width}
              height={card.height}
              title={card.title}
              color={card.color}
              fluidlyColor={card.fluidlyColor}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Hero;
