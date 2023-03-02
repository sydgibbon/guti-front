import { PopupCustomProps } from "./types";

export default function PopupCustom(popupCustomProps: PopupCustomProps) {
  const { children, state } = popupCustomProps;

  return (
    <div
      className={`${state ? 'visible opacity-100' : 'invisible opacity-0'} border transition-all duration-400 ease-in-out fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 w-screen h-screen flex items-center justify-center PopupWrapper`}
    >
      {children}
    </div>
  );
}
