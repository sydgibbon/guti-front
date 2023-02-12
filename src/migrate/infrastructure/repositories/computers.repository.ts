import { ComputerDTO } from "../http/dto/ComputerDTO";
import { http } from "../http/http";
// import { ProductDTO } from "../../infrastructure/dto/ProductDTO";
// import { Product } from "../models/Product";

export const computersRepository = {
  createComputer: async (body: ComputerDTO) => {
    const response = await http.post<ComputerDTO>("computers", body);

    return response;
    // we can extract this transform to a function inside this file to be reused by different methods
    // return products.map((productDto): Product => ({
    //   id: productDto.product_id,
    //   title: productDto.title,
    //   price: Number(productDto.price)
    // }))
  },
};
