"use client";
import React, { useEffect, useRef, useState } from "react";

import QRCodeStyling from "qr-code-styling";

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  image: "",
  dotsOptions: {
    color: "#4267b2",
    type: "rounded",
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 20,
  },
});

export default function GenerateQR() {
  const [url, setUrl] = useState("asdasd.com");
  const [fileExt, setFileExt] = useState("png");
  const ref = useRef(null);

  useEffect(() => {
    qrCode.append(ref.current);
  }, []);

  useEffect(() => {
    qrCode.update({
      data: url,
    });
  }, [url]);

  const onUrlChange = (event) => {
    event.preventDefault();
    setUrl(event.target.value);
  };

  const onExtensionChange = (event) => {
    setFileExt(event.target.value);
  };

  const onDownloadClick = () => {
    // qrCode.download({
    //   extension: fileExt,
    // });
  };

  return (
    <div className="App">
      <div className="inputWrapper">
        <input value={url} onChange={onUrlChange} className="inputBox" />
        <select onChange={onExtensionChange} value={fileExt}>
          <option value="png">PNG</option>
          <option value="jpeg">JPEG</option>
          <option value="webp">WEBP</option>
        </select>
        <button onClick={onDownloadClick}>Download</button>
      </div>
      <div ref={ref} />
    </div>
  );
}
