const products = [
  {
    name: "Azure Breeze Shirt",
    price: 25.99,
    color: "Blue",
    category: "Mens",
    featuredImage: "/images/shop/man-shirt-01.png",
    description: "A casual blue shirt perfect for everyday wear.",
    sku: "SHIRT001",
    stock: 60,
    rating: 4.2,
    reviews: 85,
    brand: "CasualWear",
    weight: "220g",
    dimensions: "30x20x1 cm",
    materials: "Cotton",
    dateAdded: "2023-07-01",
  },
  {
    name: "Ivory Executive Shirt",
    price: 35.99,
    color: "White",
    category: "Mens",
    featuredImage: "/images/shop/man-shirt-02.png",
    description: "A formal white shirt ideal for business meetings.",
    sku: "SHIRT002",
    stock: 45,
    rating: 4.6,
    reviews: 100,
    brand: "BusinessAttire",
    weight: "250g",
    dimensions: "30x20x1 cm",
    materials: "Cotton",
    dateAdded: "2023-06-15",
  },
  {
    name: "Golden Summer Shirt",
    price: 20.99,
    color: "Yellow",
    category: "Mens",
    featuredImage: "/images/shop/man-shirt-03.png",
    description: "A bright yellow shirt perfect for summer.",
    sku: "SHIRT003",
    stock: 70,
    rating: 4.4,
    reviews: 90,
    brand: "SunnyDays",
    weight: "210g",
    dimensions: "30x20x1 cm",
    materials: "Cotton",
    dateAdded: "2023-06-01",
  },
  {
    name: "Urban Denim Shirt",
    price: 45.99,
    color: "Denim",
    category: "Mens",
    featuredImage: "/images/shop/man-shirt-04.png",
    description: "A sturdy denim shirt for casual wear.",
    sku: "SHIRT004",
    stock: 35,
    rating: 4.7,
    reviews: 110,
    brand: "DenimCo",
    weight: "300g",
    dimensions: "30x20x1 cm",
    materials: "Denim",
    dateAdded: "2023-05-25",
  },
  {
    name: "Rustic Plaid Shirt",
    price: 32.99,
    color: "Red",
    category: "Mens",
    featuredImage: "/images/shop/man-shirt-05.png",
    description: "A red plaid shirt great for outdoor activities.",
    sku: "SHIRT005",
    stock: 40,
    rating: 4.5,
    reviews: 75,
    brand: "OutdoorGear",
    weight: "240g",
    dimensions: "30x20x1 cm",
    materials: "Cotton",
    dateAdded: "2023-05-10",
  },
  {
    name: "Heathered Comfort Sweater",
    price: 55.99,
    color: "Gray",
    category: "Mens",
    featuredImage: "/images/shop/man-sweater-01.png",
    description: "A comfortable gray cotton sweater for cool weather.",
    sku: "SWEATER001",
    stock: 25,
    rating: 4.8,
    reviews: 65,
    brand: "ComfortWear",
    weight: "500g",
    dimensions: "40x30x5 cm",
    materials: "Cotton",
    dateAdded: "2023-04-20",
  },
  {
    name: "Navy Winter Warmth Sweater",
    price: 65.99,
    color: "Navy",
    category: "Mens",
    featuredImage: "/images/shop/man-sweater-02.png",
    description: "A warm navy wool sweater for winter.",
    sku: "SWEATER002",
    stock: 30,
    rating: 4.9,
    reviews: 80,
    brand: "WinterCozy",
    weight: "600g",
    dimensions: "40x30x5 cm",
    materials: "Wool",
    dateAdded: "2023-03-15",
  },
  {
    name: "Emerald Knit Sweater",
    price: 50.99,
    color: "Green",
    category: "Mens",
    featuredImage: "/images/shop/man-sweater-03.png",
    description: "A stylish green knitted sweater for fall.",
    sku: "SWEATER003",
    stock: 20,
    rating: 4.3,
    reviews: 50,
    brand: "KnitFashion",
    weight: "550g",
    dimensions: "40x30x5 cm",
    materials: "Wool, Acrylic",
    dateAdded: "2023-02-28",
  },
  {
    name: "Blossom Pink Blouse",
    price: 29.99,
    color: "Pink",
    category: "Womens",
    featuredImage: "/images/shop/woman-shirt-01.png",
    description: "A pretty pink floral blouse perfect for spring.",
    sku: "BLOUSE001",
    stock: 55,
    rating: 4.6,
    reviews: 95,
    brand: "SpringStyle",
    weight: "180g",
    dimensions: "30x20x1 cm",
    materials: "Polyester",
    dateAdded: "2023-05-05",
  },
  {
    name: "Snowy Silk Blouse",
    price: 49.99,
    color: "White",
    category: "Womens",
    featuredImage: "/images/shop/woman-skirt-01.png",
    description: "An elegant white silk blouse for formal occasions.",
    sku: "BLOUSE002",
    stock: 40,
    rating: 4.8,
    reviews: 100,
    brand: "ElegantWear",
    weight: "150g",
    dimensions: "30x20x1 cm",
    materials: "Silk",
    dateAdded: "2023-04-15",
  },
];

export async function GET() {
  return Response.json({ products });
}
