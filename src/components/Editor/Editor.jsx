// EditorJSComponent.js
import { useState, useRef, useCallback } from "react";
import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "@/components/Editor/tools";

const EditorJSComponent = ({ onDataSave }) => {
  const [data, setData] = useState("");
  const editorCore = useRef(null);
  const ReactEditorJS = createReactEditorJS();

  const handleInitialize = useCallback((instance) => {
    instance._editorJS.isReady
      .then(() => {
        editorCore.current = instance;
      })
      .catch((err) => console.log("An error occurred", err));
  }, []);

  const handleSave = useCallback(async () => {
    const savedData = await editorCore.current.save();
    onDataSave(savedData); // Передаем сохраненные данные родительскому компоненту
  }, [onDataSave]);

  return (
    <div className="flex flex-col bg-[#1c1b1b] p-[24px] rounded-lg mb-[30px]">
      <span className="text-[18px] font-bold pb-[10px] text-white">
        Детальное решение
      </span>{" "}
      <ReactEditorJS
        tools={EDITOR_JS_TOOLS}
        onInitialize={handleInitialize}
        onChange={handleSave}
        defaultValue={data}
      />
    </div>
  );
};

export default EditorJSComponent;
