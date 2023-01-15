import { Paper } from "@mui/material";
import React from "react";

function PaperMui({ children, paperBackground = "#fff" }: { children: React.ReactNode; paperBackground?: string}) {
    return (
        <Paper
            component="form"
            sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                maxwidth: 400,
                width: "60%",
                margin: "0 auto",
                backgroundColor: `${paperBackground}`,
            }}
            variant="outlined"
        >
            {children}
        </Paper>
    );
}

export default PaperMui;
