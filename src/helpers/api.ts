export async function classifyImg64(img: string): Promise<any> {
  let response;
  let data = img.split("base64,")[1];
  try {
    response = await fetch(
      "https://animal-classifier-api.herokuapp.com/predict",
      {
        method: "POST",

        body: JSON.stringify({
          image_base64: `${data}`,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return await response.json();
  } catch (error) {
    console.log("error", error);
  }
}
