import ProductDetail from "@/components/product/ProductDetail";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  const product = {
    id: "1",
    img: "https://www.textil-grosshandel.eu/out/pictures/generated/produkt/EP18/500_500_100/EarthPositive_MensUnisex-Heavy-T-Shirt-Organic_default.jpg",
    name: "Casual T-Shirt 1",
    text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
    type: "T-Shirts",
    sizes: ["XL", "L", "M", "S"],
    colors: ["gray", "green", "red", "blue"],
    gender: "male",
    availability: "In Stock",
    price: 45,
    description:
      "Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet",
  };
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between px-2">
        <ProductDetail product={product} />
      </main>
    </>
  );
}
