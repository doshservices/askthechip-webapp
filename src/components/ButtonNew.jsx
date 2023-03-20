import { cva } from "class-variance-authority";

const buttonClasses = cva(
  [
    "rounded-lg",
    "hover:scale-105",
    "active:scale-100",
    "transition",
    "duration-200",
    "ease-in-out",
  ],
  {
    variants: {
      intent: {
        primary: [
          "bg-tertiary",
          "text-white",
          "border-transparent",
          "hover:bg-violet-600",
        ],
        secondary: [
          "bg-white",
          "text-black",
          "border-[#A9A9A9]",
          "hover:bg-gray-100",
          "border-solid",
          "border",
        ],
        tertiary: [
          "bg-white",
          "text-black",
          "border-gray-400",
          "hover:bg-gray-100",
          "border-solid",
          "border",
        ],
        text: ["bg-transparent", "text-black", "hover:bg-gray-100"],
      },
      size: {
        small: ["text-md", "py-1", "px-2"],
        medium: ["text-lg", "px-6", "py-2"],
        large: ["text-xlg", "px-8", "py-4"],
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "small",
    },
  }
);

const ButtonNew = ({ children, className, intent, size, ...props }) => {
  return (
    <button className={buttonClasses({ intent, size, className })} {...props}>
      {children}
    </button>
  );
};
export default ButtonNew;
