import { IProduct } from "../type/product";
import instance from "./instance";

export const list = () => {
    const url = "/products";
    return instance.get(url);
}
export const remove = (id: number) => {
    const url = `/product/${id}`;
    return instance.delete(url);
}
export const add = (product: IProduct) => {
    const url = "/product";
    return instance.post(url, product);
} 
