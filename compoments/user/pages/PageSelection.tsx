'use client'
import { useEffect, useState } from "react";
import { Box, Container, FormGroup, Stack, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import colors from "@/constants/Colors";
import Buttons from "@/constants/Buttons";
import axios from "axios";

export default function PageSelection({ pages, userid }:any) {
  const [selectedPages, setSelectedPages] = useState<any[]>([]);
  const [sending, setSending] = useState(false);
  const [hasError, setHasError] = useState(false); // State to track error

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const page = pages.find((page:any) => page.id === event.target.value);
    if (page) {
      setSelectedPages((prevSelectedPages) =>
        prevSelectedPages.some((p) => p.id === page.id)
          ? prevSelectedPages.filter((p) => p.id !== page.id)
          : [...prevSelectedPages, page]
      );
    }
  };

  const subscribePages = async () => {
    if (selectedPages.length === 0) {
      setHasError(true); // Set error state if no pages are selected
    } else {
      setSending(true);
      const data = {
        pages: selectedPages,
        uuid: userid,
      };
      try {
        await axios.post(`${process.env.NEXT_PUBLIC_PAGS_DEV_LINK}/subscribe`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        window.location.href = "/pages/" + userid;
        setSending(false);
      } catch (error) {
        setSending(false);
        console.error("Error:", error);
      }
    }
  };

  useEffect(() => {
    console.log(selectedPages);
    // Reset error state when selectedPages changes
    setHasError(false);
  }, [selectedPages]);

  return (
    <Stack sx={{ alignItems: "center", justifyContent: "center" }}>
      <Container maxWidth="sm">
        <Stack spacing={2}>
          <Typography variant="h5" sx={{ textAlign: "center", color: colors.text }}>
            Reconfirm pages you want us to access
          </Typography>

          <FormGroup>
            {pages && pages.length > 0 ? (
              pages.map((page:any) => (
                <FormControlLabel sx={{ marginTop: 2 }} key={page.id} control={<Checkbox
                  checked={selectedPages.some((p) => p.id === page.id)}
                  onChange={handleChange}
                  value={page.id}
                />}
                  label={page.name}
                />
              ))
            ) : (
              <Typography variant="body1" color="textSecondary">
                No pages available.
              </Typography>
            )}
          </FormGroup>
          {hasError && ( // Render error message if hasError is true
            <Typography variant="body1" color="error">
              Please select at least one page.
            </Typography>
          )}
          {pages && pages.length > 0 && (
            <Buttons
              disabled={sending || selectedPages.length === 0} // Disable the button if sending or no pages selected
              onClick={() => subscribePages()}
              fwidth={true}
              text="Confirm Pages"
              color={"#000"}
              py={1}
            />
          )}
        </Stack>
      </Container>
    </Stack>
  );
}
