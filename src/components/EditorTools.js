import Code from "@editorjs/code";
import Paragraph from "@editorjs/paragraph";
import ImageTool from '@editorjs/image';

export const EDITOR_TOOLS = {
  code: Code,
  paragraph: Paragraph,
  image: {
    class: ImageTool,
    config: {
      endpoints: {
        byFile: "https://server.hoster-dev.kz/api/upload_image",
      },
    },
  },
};
