import { SoftwareData } from "../../models/forms/SoftwareData";
import { softwaresRepository } from "../../repositories/softwares.repository";

export const softwaresService = {
  createSoftware: (body: SoftwareData) => {
    return softwaresRepository.createSoftware(body);
  },
  editSoftware: (body: SoftwareData, id: number) => {
    return softwaresRepository.editSoftware(body, id);
  },
  getAllSoftwares: () => {
    return softwaresRepository.getAllSoftwares();
  },
  getSoftwarecategoriesSelect: () => {
    return softwaresRepository.getSoftwarecategoriesSelect();
  },

  getSoftwaresCount: () => {
    return softwaresRepository.getSoftwaresCount();
  },

  getSoftwarelicensesCount: () => {
    return softwaresRepository.getSoftwarelicensesCount();
  },

  getSoftwareById: (id: number) => {
    return softwaresRepository.getSoftwareById(id);
  },
};
