import React from "react";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const Pdf = () => {
    const [url, setUrl] = React.useState("");

    // Handle the `onChange` event of the `file` input
    const onChange = (e) => {
        const files = e.target.files;
        files.length > 0 && setUrl(URL.createObjectURL(files[0]));
    };

    return (
        <div style={{marginBottom: '50px'}}>
            <h3>React PDF Viewer</h3>
            <input type="file" accept=".pdf" onChange={onChange} />

            <div style={{ height: "750px" }}>
                {url ? (
                <div
                    style={{
                    border: "1px solid rgba(0, 0, 0, 0.3)",
                    height: "100%",
                    }}
                >
                    <Viewer fileUrl={url} />
                </div>
                ) : (
                <div
                    style={{
                    alignItems: "center",
                    border: "2px dashed rgba(0, 0, 0, .3)",
                    display: "flex",
                    fontSize: "2rem",
                    height: "100%",
                    justifyContent: "center",
                    width: "100%",
                    }}
                >
                    Preview area
                </div>
                )}
            </div>
            <hr />
        </div>
    );
};

export default Pdf;