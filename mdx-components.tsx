import type { MDXComponents } from "mdx/types";
import { Sandbox } from "./components/Sandbox/Sandbox";
import { Code } from "./components/Code/Code";

const components: MDXComponents = {
  Code: Code,
  Sandbox: Sandbox,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
