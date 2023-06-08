import { HTMLAttributes } from "react";

interface ButtonProps {
  text: string;
  isLoading?: boolean;
  loadingText?: string;
  isWidthFull?: boolean;
  isDisabled?: boolean;
}

export default function PrimaryButton({
  text,
  isLoading = false,
  loadingText = "Loading ...",
  isWidthFull = false,
  isDisabled,
  ...rest
}: ButtonProps & HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm ${
        isDisabled || isLoading ? "opacity-50 cursor-not-allowed" : ""
      } ${isWidthFull && "w-full"}`}
      disabled={isDisabled ? isDisabled : isLoading ? true : false}
      {...rest}
    >
      {isLoading && (
        <span
          className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full"
          role="status"
          aria-label="loading"
        ></span>
      )}
      {isLoading ? loadingText : text}
    </button>
  );
}
