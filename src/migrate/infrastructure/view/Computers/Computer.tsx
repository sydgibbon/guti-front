import { useEffect } from "react";
import SearchForm from "../../components/dashboard/SearchForm";
import TableComputers from "../../components/dashboard/Tables/Computers/Table";
import PopupCustom from "../../components/popups/PopupCustom";
import { getPopupIsOpen, setPopupIsOpen } from "../../redux/Computers";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export default function Computers() {
  const popupIsOpen = useAppSelector(getPopupIsOpen);

  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(setPopupIsOpen(false));
  };

  useEffect(() => {
    dispatch(setPopupIsOpen(true));
  }, []);

  const secondaryButtonHandle = () => {
    alert("Aceptaste")
  }

  return (
    <div className="computers">
      <SearchForm />
      <TableComputers />
      <PopupCustom
        state={popupIsOpen}
        handleClose={handleClose}
        title="esto es un titulo"
        crossClassName="text-blue-500"
        content="nahuel Gigena"
        contentClassName="text-gray-800"
        primaryButtonText="Cancelar"
        secondaryButtonText="Aceptar"
        secondaryButtonHandle={secondaryButtonHandle}
        primaryButtonHandle={handleClose}
      />
    </div>
  );
}
