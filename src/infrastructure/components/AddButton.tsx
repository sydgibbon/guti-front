import { TbPlus } from "react-icons/tb";

interface ButtonProps {
  children?: React.ReactNode
  buttonname?: string;
  onClick?: () => void;
}

export default function AddButton(ButtonProps: ButtonProps) {
  const { children, buttonname, onClick } = ButtonProps;

  return (
    <TbPlus className="cursor-pointer flex-row border h-11 w-8 rounded-md bg-primary-light text-white border-orange-dark"
      onClick={onClick}
    />


  );

}