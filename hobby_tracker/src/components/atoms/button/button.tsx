import { forwardRef, ComponentProps } from "react";

const Button = forwardRef<
  HTMLButtonElement,
  Omit<ComponentProps<"button">, "className">
>(({ children, ...rest }, ref) => {
  return (
		<button
			ref={ref}
			className="w-full sm:w-auto flex-none bg-neutral-600 hover:bg-neutral-500 text-white text-md leading-6 font-semibold py-2 px-4 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-gray-200 focus:outline-none transition-colors duration-200"
			{...rest}
		>
			{children}
		</button>
	);
});

export default Button;
