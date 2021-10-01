import React, { useState } from "react";
import getBase64 from "../helpers/imgToBase64";
import { classifyImg64 } from "../helpers/api";

function Upload() {
  const [img, setImg] = useState<File | undefined>();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (img) {
      getBase64(img).then((res) =>
        classifyImg64(res).then((res) => console.log(res))
      );
    }
  };
  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | null>
  ): void => {
    let files: FileList | null = e.currentTarget.files;
    if (files?.length) {
      setImg(files[0]);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" name="img" onChange={handleOnChange} />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default Upload;
