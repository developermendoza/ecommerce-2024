const blogs = [
  {
    id: 1,
    title: "As People move out of big cities, fashion retail Followns",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel voluptas autem incidunt blanditiis consequuntur, nesciunt molestias ipsam pariatur. Provident velit quis earum culpa quia asperiores ipsum animi, nam harum sint.",
    date: "20 Jan, 2024",
    category: "fashion",
    featuredImage: "/images/blog/blog-01.jpeg",
  },
  {
    id: 2,
    title: "Chic Chronicles: Your Daily Dose of Fashion Inspiration",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel voluptas autem incidunt blanditiis consequuntur, nesciunt molestias ipsam pariatur. Provident velit quis earum culpa quia asperiores ipsum animi, nam harum sint.",
    date: "20 Jan, 2024",
    category: "fashion",
    featuredImage: "/images/blog/blog-02.jpeg",
  },
  {
    id: 3,
    title: "Style Savvy: Trendspotting and Timeless Tips",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel voluptas autem incidunt blanditiis consequuntur, nesciunt molestias ipsam pariatur. Provident velit quis earum culpa quia asperiores ipsum animi, nam harum sint.",
    date: "20 Jan, 2024",
    category: "fashion",
    featuredImage: "/images/blog/blog-03.jpeg",
  },
  {
    id: 4,
    title: "Runway Reverie: High Fashion Highlights and Hacks",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel voluptas autem incidunt blanditiis consequuntur, nesciunt molestias ipsam pariatur. Provident velit quis earum culpa quia asperiores ipsum animi, nam harum sint.",
    date: "20 Jan, 2024",
    category: "fashion",
    featuredImage: "/images/blog/blog-04.jpeg",
  },
  {
    id: 5,
    title: "Vogue Voyage: Exploring Global Fashion Trends",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel voluptas autem incidunt blanditiis consequuntur, nesciunt molestias ipsam pariatur. Provident velit quis earum culpa quia asperiores ipsum animi, nam harum sint.",
    date: "20 Jan, 2024",
    category: "fashion",
    featuredImage: "/images/blog/blog-05.jpeg",
  },
];
export function GET(request, { params }) {
  const blogId = parseInt(params.id);
  const blog = blogs.find((blog) => blog.id === blogId);
  return Response.json({ blog });
}
