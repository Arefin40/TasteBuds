export default ({
   className,
   size = "medium",
   secondary = false,
   children,
   onClick,
}) => {
   const classes = size === "large" ? "px-8 py-5 text-xl" : "px-4 py-2.5";
   const variant = secondary
      ? " bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 text-white border-2 border-white"
      : "bg-green-500 text-white";
   return (
      <button
         onClick={onClick}
         className={`${classes} ${variant} ${className} font-medium rounded-full transition-all active:scale-95 backdrop:blu`}
      >
         {children}
      </button>
   );
};
