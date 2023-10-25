import { PduData } from "../../models/forms/PduData";
import { pdusRepository } from "../../repositories/pdus.repository";

export const pdusService = {
  createPdu: (body: PduData) => {
    return pdusRepository.createPdu(body);
  },
  editPdu: (body: PduData, id: number) => {
    return pdusRepository.editPdu(body, id);
  },
  getAllPdus: () => {
    return pdusRepository.getAllPdus();
  },
  getPdumodelsSelect: () => {
    return pdusRepository.getPdumodelsSelect();
  },
  getPdutypesSelect: () => {
    return pdusRepository.getPdutypesSelect();
  },

  getPdusCount: () => {
    return pdusRepository.getPdusCount();
  },
};
