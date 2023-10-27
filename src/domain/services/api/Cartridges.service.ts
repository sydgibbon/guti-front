import { CartridgeData } from "../../models/forms/CartridgesData";
import { cartridgesRepository } from "../../repositories/cartridges.repository";

export const cartridgesService = {
  createCartridge: (body: CartridgeData) => {
    return cartridgesRepository.createCartridge(body);
  },
  getAllCartrdiges: () => {
    return cartridgesRepository.getAllCartridges();
  },
  getCartridgetypesSelect: () => {
    return cartridgesRepository.getCartridgetypesSelect();
  },
};
