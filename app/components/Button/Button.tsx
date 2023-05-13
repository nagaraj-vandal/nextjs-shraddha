
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("button", {
  variants: {
    intent: {
      brand: [
        "bg-brand",
        "text-white",
        "border-transparent",
      ],
      black: [
        "bg-black",
        "text-white",
        "border-transparent",
      ],
      white: [
        "bg-white",
        "text-gray-800",
        "border-transparent",
      ],
    },
    size: {
      small: ["text-sm", "w-28" , "h-12" ],
      medium: ["text-base","w-80" , "h-16" ],
    },
  },
  compoundVariants: [{ intent: "brand", size: "medium", class: "uppercase" }],
  defaultVariants: {
    intent: "brand",
    size: "small",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

    

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => <button className={button({ intent, size, className })} {...props} />;