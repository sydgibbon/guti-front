import { useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { ModalCustomProps } from "./types";

export default function ModalCustom(modalCustomProps: ModalCustomProps) {
  const {
    children,
    state,
    title,
    titleClassName,
    crossClassName,
    content,
    contentClassName,
    primaryButtonText,
    secondaryButtonText,
    handleClose,
    primaryButtonHandle,
    secondaryButtonHandle,
  } = modalCustomProps;

  const ref = useRef<any>();

  useOnClickOutside(ref, handleClose);

  return (
    <div
      className={`${
        state ? "visible opacity-100" : "invisible opacity-0"
      } border transition-all duration-400 ease-in-out fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 w-screen h-screen flex items-center justify-center PopupWrapper`}
    >
      <div
        ref={ref}
        className="w-2/3 m-12 h-[45rem]  overflow-auto bg-white rounded-lg shadow-md mx-auto ContentWrapper"
      >
        {title && (
          <div className="flex justify-between mb-5 Header">
            <div
              className={`${
                titleClassName ?? "text-xl font-bold"
              } uppercase Title`}
            >
              {title}
            </div>
            <div
              onClick={handleClose}
              className={`w-6 h-6 rounded-full border-2 border-red-800 bg-white text-red-800 flex items-center justify-center cursor-pointer hover:text-white hover:bg-red-800 hover:shadow transition-all duration-300 ease-in-out ${crossClassName} CloseButton`}
            >
              X
            </div>
          </div>
        )}

        {content && (
          <div className={`${contentClassName} w-full Content`}>{content}</div>
        )}

        {children && children}

        {(primaryButtonText || secondaryButtonText) && (
          <div className="w-full flex justify-center items-center gap-x-6 mt-5 ButtonsContainer">
            {primaryButtonText && (
              <div
                onClick={primaryButtonHandle}
                className="px-3 py-2 rounded-md hover:shadow border transition-all duration-300 ease-in-out cursor-pointer PrimaryButton"
              >
                {primaryButtonText}
              </div>
            )}
            {secondaryButtonText && (
              <div
                onClick={secondaryButtonHandle}
                className="px-3 py-2 rounded-md hover:shadow border transition-all duration-300 ease-in-out cursor-pointer SecondaryButton"
              >
                {secondaryButtonText}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
