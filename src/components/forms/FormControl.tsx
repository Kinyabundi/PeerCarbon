import { ChangeEvent, RefObject } from "react";
import { IconType } from "react-icons";

interface FormControlProps {
  Icon?: IconType;
  value?: string | number;
  onChange?: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  placeholder?: string;
  inputType?: string;
  labelText: string;
  rightElement?: JSX.Element;
  variant?: "textarea" | "input" | "select";
  options?: string[];
  required?: boolean;
}

interface UploadBtnProps {
  labelText: string;
  btnText?: string;
  isDisabled?: boolean;
  accept?: "image/png" | "image/jpeg" | "image/jpg";
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  pickerRef?: RefObject<HTMLInputElement>;
  value?: string | ArrayBuffer | null;
}

interface FormIconBtnProps {
  Icon: IconType;
  btnText?: string;
}

export default function FormControl({
  Icon,
  value,
  onChange,
  placeholder,
  inputType,
  labelText,
  rightElement,
  variant = "input",
  options = [],
  required,
}: FormControlProps) {
  return (
    <div className="my-3">
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {labelText}
      </label>
      <div className="relative mb-6">
        {Icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Icon className="w-5 h-5 text-gray-500" />
          </div>
        )}
        {variant === "input" && (
          <input
            type={inputType ?? "text"}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
          />
        )}
        {variant === "textarea" && (
          <textarea
            rows={4}
            value={value}
            onChange={onChange}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder={placeholder}
            required={required}
          ></textarea>
        )}
        {variant === "select" && (
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
            value={value}
            onChange={onChange}
            required={required}
          >
            <option value="">{placeholder}</option>
            {Array.isArray(options) &&
              options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
          </select>
        )}
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none cursor-pointer z-30">
          {rightElement}
        </div>
      </div>
    </div>
  );
}

export const UploadBtn = ({
  labelText,
  btnText,
  isDisabled = false,
  pickerRef,
  value,
  onChange,
  accept,
}: UploadBtnProps) => {
  return (
    <div className="my-3">
      <label className="block text-sm font-medium text-gray-900">
        {labelText}
      </label>
      <button
        onClick={() => pickerRef?.current?.click()}
        disabled={isDisabled}
        type="button"
        className="flex items-center px-3 py-3 mx-auto mt-2 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer w-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
          />
        </svg>
        <h2 className="mx-3 text-gray-400">{btnText}</h2>
      </button>
      <input
        type="file"
        className="hidden"
        ref={pickerRef}
        accept={accept}
        onChange={onChange}
      />
    </div>
  );
};

export const FormIconBtn = ({ Icon, btnText }: FormIconBtnProps) => {
  return (
    <button
      type="button"
      className="text-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none font-medium rounded-full text-sm p-1.5 text-center inline-flex items-center cursor-pointer"
    >
      <Icon className="w-5 h-5 text-gray-500" />
      <span className="sr-only">{btnText}</span>
    </button>
  );
};
