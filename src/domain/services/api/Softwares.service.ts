import { SoftwareData } from "../../models/forms/SoftwareData";
import { softwaresRepository } from "../../repositories/softwares.repository";

export const softwaresService = {
  createSoftware: (body: SoftwareData) => {
    return softwaresRepository.createSoftware(body);
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
};
