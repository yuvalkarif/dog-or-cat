export async function classifyImg64(img: string): Promise<any> {
  const response = await fetch(
    "https://animal-classifier-api.herokuapp.com/predict",
    {
      method: "POST",
      headers: {
        "Content-Type": "application / json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        image_base64: `${img}`,
      }),
    }
  );
  const body = await response.json();
  return body;
}
