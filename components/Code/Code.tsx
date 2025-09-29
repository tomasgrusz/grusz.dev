import { BundledLanguage, createHighlighter } from "shiki/bundle/web";
import { useMemo } from "react";

const languages = [
  "html" as const,
  "js" as const,
  "ts" as const,
  "jsx" as const,
  "tsx" as const,
  "css" as const,
  "scss" as const,
  "json" as const,
  "md" as const,
  "mdx" as const,
];

const highlighter = await createHighlighter({
  langs: languages as BundledLanguage[],
  themes: ["one-dark-pro"],
});

type CodeProps = {
  language: (typeof languages)[number];
  code: string;
};

export const Code: React.FC<CodeProps> = ({ language, code }) => {
  const highlightedCode = useMemo(() => {
    return highlighter.codeToHtml(code, {
      lang: language,
      theme: "one-dark-pro",
    });
  }, [code, language]);

  return (
    <div>
      <code dangerouslySetInnerHTML={{ __html: highlightedCode }}></code>
    </div>
  );
};
