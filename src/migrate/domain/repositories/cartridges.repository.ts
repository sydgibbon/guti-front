import { CartridgesDTO } from "../dto/CartridgesDTO";
import http from "../http/http";

export const cartridgesRepository = {

  getAllCartridges: async () => {
    const response = await http.get<CartridgesDTO>("cartridgeitems/");    

    return response.data;
  },
};
