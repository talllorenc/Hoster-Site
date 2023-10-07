"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import hljs from "highlight.js";
import "highlight.js/styles/stackoverflow-dark.css";

const ContentW = ({ content }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content).then(
      () => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      },
      (error) => {
        console.error("Failed to copy: ", error);
      }
    );
  };

  const closePopUp = () => {
    setCopied(false);
  };

  useEffect(() => {
    document.querySelectorAll("pre code").forEach((el) => {
      hljs.highlightElement(el);
    });
  }, []);

  return (
    <div>
      <div className="relative">
        <pre className="">
          <code className="rounded-xl">
            <span className="max-w-[1018px]">{content}</span>
          </code>
        </pre>
        <button
          className="absolute top-[15px] right-[15px] border rounded-lg p-2 hover:bg-green-500 "
          onClick={copyToClipboard}
        >
          <Image
            src="/copy-clipboard.png"
            width={30}
            height={30}
            alt="copy img"
          />
        </button>
      </div>
      {copied && (
        <div className="fixed flex items-center justify-between top-0 left-0 right-0 bg-[#dcfdd9] h-[50px] p-3 ">
          <div className="flex">
            <Image src="/check-mark.png" width={20} height={20} alt="copyed" />
            <span className="text-green-500 text-2xl">Скопировано</span>
          </div>

          <button className="text-black" onClick={closePopUp} >
            <Image src="/close.png" width={15} height={15} alt="close btn" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ContentW;
