import { CartridgesItemsDTO } from "../dto/CartridgesDTO";
import http from "../http/http";

export const cartridgesRepository = {

  getAllCartridges: async () => {
    const response = await http.get<CartridgesItemsDTO>("getCartridgeitems/");    

    return response.data;
  },
};
