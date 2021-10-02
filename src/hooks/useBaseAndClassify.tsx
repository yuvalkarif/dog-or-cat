import { useState } from "react";
import getBase64 from "../helpers/imgToBase64";
import { classifyImg64 } from "../helpers/api";
async function useBaseAndClassify(file: File) {
  const [result, setResult] = useState<Response | undefined>();
  const base64 = await getBase64(file);
  const prediction = await classifyImg64(base64);
  setResult(prediction);
  return result;
}
export default useBaseAndClassify;
