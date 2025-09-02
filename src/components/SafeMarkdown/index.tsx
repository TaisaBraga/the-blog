import ReactMarkDown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

type SafeMarkdownProps = {
  markdown: string;
};

export default function SafeMarkdown({ markdown }: SafeMarkdownProps) {
  return (
    <div
      className={
        "prose prose-slate w-full max-w-none overflow-hidden prose-a:transition prose-a:no-underline prose-a:text-blue-500 prose-a:hover:text-blue-700 prose-a:hover:underline prose-img:mx-auto md:prose-lg text-justify"
      }
    >
      <ReactMarkDown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
        components={{
          table: ({ node, ...props }) => {
            if (!node?.children) return "";
            return (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px]" {...props}/>
              </div>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkDown>
    </div>
  );
}
