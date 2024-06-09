export async function getBlogs() {
  const res = await fetch(`https://ecommerce-2024-gray.vercel.app/api/blogs`, {
    cache: "no-store",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export async function getProducts() {
  const res = await fetch(`https://ecommerce-2024-gray.vercel.app/api/shop`, {
    cache: "no-store",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export async function getBlogById(id: any) {
  const res = await fetch(
    `https://ecommerce-2024-gray.vercel.app/api/blogs/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getCategories() {
  const res = await fetch(
    `https://ecommerce-2024-gray.vercel.app/api/categories`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export async function getTags() {
  const res = await fetch(`https://ecommerce-2024-gray.vercel.app/api/tags`, {
    cache: "no-store",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
