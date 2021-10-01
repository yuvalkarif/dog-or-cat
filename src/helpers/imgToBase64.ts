// function getBase64(file: File | undefined): string | undefined {
//   const reader = new FileReader();
//   reader.onloadend = () => {
//     if (reader?.result) {
//       const base64String: string = reader.result.toString();

//       return base64String.replace("data:", "").replace(/^.+,/, "");
//     }
//   };
//   if (file) {
//     reader.readAsDataURL(file);
//   } else {
//     return undefined;
//   }
// }
function getBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result) {
        resolve(
          reader.result.toString().replace("data:", "").replace(/^.+,/, "")
        );
      }
    };

    reader.onerror = (error) => reject(error);
  });
}

export default getBase64;
