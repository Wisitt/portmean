const ColorPalette = ({
  colors,
  axis = "x",
}: {
  colors: string[];
  axis?: "x" | "y";
}) => {
  return (
    <ul className={`flex gap-[28px] ${axis === "x" ? "flex-row" : "flex-col"}`}>
      {colors.map((color) => (
        <li
          style={{
            backgroundColor: color,
          }}
          className="size-8 shadow-[0_0_4px_rgba(0,0,0,0.08)]"
          key={color}
        />
      ))}
    </ul>
  );
};

export default ColorPalette;
