function getBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result) {
        resolve(reader.result.toString().replace("data:", ""));
      }
    };

    reader.onerror = (error) => reject(error);
  });
}

export default getBase64;
