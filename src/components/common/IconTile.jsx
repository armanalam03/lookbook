import scn from "scn";

const IconTile = ({
  title = "",
  icon,
  showBackground = false,
  className = "",
  ...props
}) => {
  return (
    <div
      className={scn(
        "text-white font-semibold gap-1 aspect-square w-fit h-fit rounded-full",
        showBackground && "bg-white/60 p-2",
        props.onClick && "cursor-pointer",
        className
      )}
      {...props}
    >
      {icon}
      {title && <span className="text-sm">{title}</span>}
    </div>
  );
};

export default IconTile;
