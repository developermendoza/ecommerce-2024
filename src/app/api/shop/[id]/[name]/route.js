export async function GET(request, { params }) {
  console.log("params: ", params);
  return Response.json({ msg: "testing this route" });
}
