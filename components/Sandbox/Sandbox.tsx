import {
  Sandpack,
  SandpackFiles,
  SandpackPredefinedTemplate,
} from "@codesandbox/sandpack-react";
import { atomDark } from "@codesandbox/sandpack-themes";

type SandboxProps = {
  template: SandpackPredefinedTemplate;
  files: SandpackFiles;
};

export const Sandbox: React.FC<SandboxProps> = ({
  template = "react-ts",
  files = {
    "/App.tsx": `export default function App() {
            return <h1>Hello World!</h1>
            }`,
    "/App.css": `* {
                color: green;
            }`,
  },
}) => {
  return (
    <Sandpack files={files} template={template} theme={atomDark} options={{}} />
  );
};
