import { useEffect, useRef } from "react";
import WebViewer from "@pdftron/webviewer";

const MyComponent = () => {
  const viewer = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        path: "/",
        licenseKey: "YOUR_LICENSE_KEY",
        initialDoc:
          "https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf",
      },
      viewer.current
    ).then((instance) => {
      const { documentViewer } = instance.Core;
      // you can now call WebViewer APIs here...
    });
  }, []);

  return (
    <div className="MyComponent" style={{ width: "100vw", height: "100vh" }}>
      <div className="webviewer" ref={viewer} style={{ height: "100vh" }}></div>
    </div>
  );
};

export default MyComponent;
