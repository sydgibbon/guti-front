import { useEffect } from "react";
import SearchForm from "../../components/dashboard/SearchForm";
import TableComputers from "../../components/dashboard/Tables/Computers/Table";
import ModalCustom from "../../components/modals/ModalCustom";
import { getModalIsOpen, setModalIsOpen } from "../../redux/Computers";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export default function Computers() {
  const modalIsOpen = useAppSelector(getModalIsOpen);

  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(setModalIsOpen(false));
  };

  useEffect(() => {
    dispatch(setModalIsOpen(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const secondaryButtonHandle = () => {
    alert("Aceptaste")
  }

  return (
    <div className="computers">
      <SearchForm />
      <TableComputers />
      <ModalCustom
        state={modalIsOpen}
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
};

