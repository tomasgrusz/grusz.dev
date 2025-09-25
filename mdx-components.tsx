import type { MDXComponents } from "mdx/types";
import { TestComponent } from "./components/TestComponent/TestComponent";

const components: MDXComponents = {
  TestComponent: TestComponent,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
