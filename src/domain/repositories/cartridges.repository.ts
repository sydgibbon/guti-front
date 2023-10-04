import { CartridgesItemsDTO } from "../dto/CartridgesDTO";
import { CartridgeData } from "../models/forms/CartridgesData";
import http from "../services/api/http";

export const cartridgesRepository = {
  createCartridge: async (body: CartridgeData) => {
    const response = await http.post<CartridgesItemsDTO>(
      "createCartridgeitem/",
      body
    );

    return response;
  },
  editCartridge: async (body: CartridgeData, id: number) => {
    const response = await http.put<CartridgesItemsDTO>(
      `updateCartridgeById/${id}/`,
      body
    );

    return response;
  },
  getAllCartridges: async () => {
    const response = await http.get<CartridgesItemsDTO>("getCartridgeitems/");

    return response.data;
  },
  getCartridgetypesSelect: async () => {
    const response = await http.get<CartridgesItemsDTO>(
      "getCartridgeitemtypesSelect/"
    );

    return response.data;
  },
};
