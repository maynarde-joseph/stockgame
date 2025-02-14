export async function GET(request) {
  const inputValue = request.nextUrl.searchParams.get("symbol");
  try {
    const response = await fetch(
      `https://jdktzejo4f.execute-api.ap-southeast-2.amazonaws.com/prod/details?symbol=${encodeURIComponent(
        inputValue
      )}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return Response.json({ data });
  } catch (error) {
    console.error(error);
    return null;
  }
}
