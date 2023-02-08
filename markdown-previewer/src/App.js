import { useState } from "react";
import { marked } from "marked";
import "./styles.css";

export default function App() {
  const [text, setText] = useState(`
# Markdown 
## Is Awesome
[Add url you want](https://www.linkedin.com/in/t-m-yang/)
\`↓you can type code in here↓\`
\`\`\`
{
  "Country": "Japan",
  "City": "Sapporo",
  "State": "Hokkaido"
}
\`\`\`
### my hobbies:
- Programming
- Writing
- Snowboarding

> "Be water" by Bruce Lee

![Add image here](image.jpg)

***Bold Text Supported***
  `);

  marked.setOptions({
    breaks: true
  });

  const handleText = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <textarea id="editor" onChange={handleText} value={text}></textarea>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(text) }}
      ></div>
    </div>
  );
}
