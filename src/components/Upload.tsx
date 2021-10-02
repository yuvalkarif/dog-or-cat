import React, { useState } from "react";
import getBase64 from "../helpers/imgToBase64";
import { classifyImg64 } from "../helpers/api";

function Upload() {
  const [img, setImg] = useState<string | undefined>();
  const [response, setResponse] = useState<Response | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (img) {
      setLoading(true);
      classifyImg64(img).then((res) => {
        setLoading(false);
        setResponse(res);
      });
    }
  };
  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | null>
  ): void => {
    let files: FileList | null = e.currentTarget.files;
    if (files?.length) {
      getBase64(files[0]).then((res) => setImg(res));
    }
  };
  return (
    <div>
      {loading && <p>Loading....</p>}
      {response && (
        <span>
          {response?.prediction}
          {response?.confidence}
        </span>
      )}
      <form onSubmit={handleSubmit}>
        <input type="file" name="img" onChange={handleOnChange} />
        <button type="submit">SUBMIT</button>
        {img && <img src={img} alt="preview"></img>}
      </form>
    </div>
  );
}

export default Upload;

interface Response {
  confidence: string;
  prediction: string;
}
