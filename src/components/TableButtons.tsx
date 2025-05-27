import { Car } from "@/types";

export function ShowPriceButton({ value }: { value : string }) {
    const price = parseFloat(value);
    const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
    return <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 cursor-pointer h-full w-full flex items-center justify-center" onClick={() => alert(formattedPrice)}>Show Price</button>;
}