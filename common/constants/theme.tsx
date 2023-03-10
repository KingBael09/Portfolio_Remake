import { createTheme } from "@mui/material";

export const ThemeSettings = () => {
  return createTheme({
    typography: {
      allVariants: {
        fontFamily: "var(--defaultFont)",
        textTransform: "none",
      },
    },
    components: {
      MuiCircularProgress: {
        defaultProps: {
          color: "inherit",
          thickness: 6,
        },
      },
      MuiDialog: {
        defaultProps: {
          fullWidth: true,
        },
        styleOverrides: {
          paper: {
            backgroundColor: "var(--mPannelColor)",
            color: "#fff",
            margin: "10px",
            flex: 1,
            padding: "1rem 0rem",
            borderRadius: "15px",
          },
        },
      },
      MuiDialogTitle: {
        defaultProps: {
          sx: {
            fontWeight: "var(--diagTitleWeight)",
            fontSize: "var(--diagTitleFSize)",
          },
        },
      },
      MuiDialogContent: {
        defaultProps: {
          sx: {
            padding: "1rem 0rem",
          },
        },
      },
      MuiBackdrop: {
        defaultProps: {
          sx: {
            backdropFilter: "blur(3px)",
          },
        },
      },
      MuiButton: {
        defaultProps: {
          color: "inherit",
        },
      },
      MuiIconButton: {
        defaultProps: {
          color: "inherit",
        },
      },
      MuiSkeleton: {
        defaultProps: {
          sx: {
            bgcolor: "hsl(222, 12%, 25%)",
          },
        },
      },
      MuiAlert: {
        variants: [
          {
            props: { severity: "success" },
            style: {
              backgroundColor: "hsl(137, 68%, 25%)",
            },
          },
        ],
      },
    },
  });
};
