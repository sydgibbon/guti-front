import { cartridgesRepository } from "../../repositories/cartridges.repository";

export const cartridgesService = {

  getAllCartrdiges: () => {
    return cartridgesRepository.getAllCartridges();
  },
  getCartridgetypesSelect: () => {
    return cartridgesRepository.getCartridgetypesSelect();
  },
};
