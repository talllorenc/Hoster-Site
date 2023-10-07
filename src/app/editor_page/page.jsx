"use client"

import dynamic from "next/dynamic";
import { useState } from "react";

const Editor = dynamic(() => import("@/components/Editor"), {
    ssr: false,
});

export default function EditorPage() {
    const [data, setData] = useState();
    return (
        <div className="grid grid-cols-2 gap-2 m-2">
            <div className="col-span-1">
                <h1>Editor</h1>
                <div className="border rounded-md">
                    <Editor
                        data={data}
                        onChange={setData}
                        holder="editorjs-container"
                    />
                </div>
            </div>
        </div>
    );
};
