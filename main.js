marked.setOptions({ breaks: true });

const renderer = new marked.Renderer();

const initialMarkdown = `# Heading 1

## Subheading

[This is a link](https://www.freecodecamp.org)

\`inline code\`

\`\`\`
code block
\`\`\`

- List item

> Blockquote

![Image](https://via.placeholder.com/150)

**Bold text**
`;

function App() {
  const [text, setText] = React.useState(initialMarkdown);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Markdown Previewer</h1>
      <div className="row">
        <div className="col">
          <textarea
            id="editor"
            className="form-control"
            value={text}
            onChange={handleChange}
            rows="10"
          ></textarea>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <h3>Preview</h3>
          <div
            id="preview"
            className="p-3 border"
            dangerouslySetInnerHTML={{
              __html: marked(text, { renderer: renderer }),
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
