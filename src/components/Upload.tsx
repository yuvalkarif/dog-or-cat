import React, { useState, useRef } from "react";
import getBase64 from "../helpers/imgToBase64";
import { classifyImg64 } from "../helpers/api";
import "../styles/components.scss";

function Upload() {
  const [img, setImg] = useState<string | undefined>();
  const [response, setResponse] = useState<Response | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const file = useRef<HTMLInputElement | null>(null);

  //Handlers

  const handleClick = (e: React.SyntheticEvent) => {
    file?.current?.click();
  };
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
    <div className="upload-wrapper">
      <div className="upload-container">
        <h2>Upload an image of a cat or a dog and let me sniff !</h2>
        {loading && <p>Loading....</p>}
        {response && (
          <span>
            {response?.prediction}
            {response?.confidence}
          </span>
        )}
        <form onSubmit={handleSubmit} className="upload-form">
          <input
            className="browse"
            type="file"
            name="img"
            placeholder="yo"
            ref={file}
            onChange={handleOnChange}
          />

          {img && <img className="preview" src={img} alt="preview"></img>}
          <div className="btns">
            <button type="button" onClick={handleClick}>
              Upload Photo
            </button>
            <button type="submit" className="submit-btn">
              Sniff Sniff...
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Upload;

interface Response {
  confidence: string;
  prediction: string;
}
