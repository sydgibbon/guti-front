import { softwaresRepository } from "../../repositories/softwares.repository"

export const softwaresService = {
  getAllSoftwares: () => {
    return softwaresRepository.getAllSoftwares()
},
getSoftwarecategoriesSelect: () => {
  return softwaresRepository.getSoftwarecategoriesSelect();
},
}