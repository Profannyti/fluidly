const Hero_Card = ({ width, height, title, color, fluidlyColor }) => {
  const regex = /(Fluidly)(\.?)/i;
  const parts = title.split(regex);

  return (
    <div
      className="rounded-2xl flex items-end text-xl font-semibold text-white p-5"
      style={{ width, height, backgroundColor: color }}
    >
      <span>
        {parts[0]}
        <span style={{ color: fluidlyColor }}>{parts[1]}</span>
        {parts[2]}
      </span>
    </div>
  );
};

export default Hero_Card;
