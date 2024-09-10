import React from "react";

interface SearchBoxButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  open: boolean;
  title: string;
  placeholder: string;
  closedTitle?: string;
}

export const SearchBoxButton: React.FC<SearchBoxButtonProps> = ({
  title,
  placeholder,
  closedTitle,
  className,
  open,
  ...props
}: SearchBoxButtonProps) => {
  if (!open && !closedTitle) return null;

  return (
    <button
      className={`rounded-l-full rounded-r-full flex flex-col justify-center w-full ${
        className ?? ""
      } ${open ? "px-8 py-4" : "px-2 justify-center items-center"}`}
      {...props}
    >
      {open && (
        <>
          <div className="text-black text-sm">{title}</div>
          <div className="text-gray-500 text-xs">{placeholder}</div>
        </>
      )}
      {!open && (
        <>
          <div className="text-black text-sm">{closedTitle}</div>
        </>
      )}
    </button>
  );
};
