import { CartridgesItemsDTO } from "../dto/CartridgesDTO";
import http from "../services/api/http";

export const cartridgesRepository = {

  getAllCartridges: async () => {
    const response = await http.get<CartridgesItemsDTO>("getCartridgeitems/");    

    return response.data;
  },
  getCartridgetypesSelect: async () => {
    const response = await http.get<CartridgesItemsDTO>("getCartridgeitemtypesSelect/");    

    return response.data;
  },
};
