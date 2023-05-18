import { networksRepository } from "../../repositories/networks.repository";

export const networksService = {
  getNetworksSelect: () => {
    return networksRepository.getNetworksSelect();
  },
};
