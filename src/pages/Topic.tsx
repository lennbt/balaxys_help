import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

const Topic = () => {
  const { id } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    import(`../markdown/${id}.md`)
      .then((module) => fetch(module.default).then((res) => res.text()))
      .then((text) => setContent(text))
      .catch(() => setContent("# Tema no encontrado"));
  }, [id]);

  return (
    <div>
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      />
    </div>
  );
};

export default Topic;
