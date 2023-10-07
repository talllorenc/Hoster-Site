import Code from '@editorjs/code';
import Paragraph from '@editorjs/paragraph';
import ImageTool from '@editorjs/image';

export const EDITOR_JS_TOOLS = {
    code: Code,
    paragraph: Paragraph,
    image: {
      class: ImageTool,
      config: {
        endpoints: {
          byFile: 'http://138.197.112.193:3000/api/upload_image', 
        },
      },
    },
};
