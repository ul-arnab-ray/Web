import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

const RightBox = ({ value }) => {
  return (
    <Box
      sx={{
        my: "10px",
        borderRadius: "16px",
        px: "12px",
        py: "8px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 18px 40px 0px #7090B01F",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 0.5,
        }}
      >
        <Avatar alt="img" src={value?.img} />
        <Box width="85%">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "14px" }}>{value?.id}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              <Box
                sx={{
                  px: "6px",
                  borderRadius: "16px",
                  background:
                    value?.sepone === "Healthcare" ? "#4318FF1A" : "#FF847C1A",
                  border:
                    value?.sepone === "Healthcare"
                      ? "0.5px solid #4318FF"
                      : "0.5px solid #FF847C",
                }}
              >
                <Typography sx={{ fontSize: "10px" }}>
                  {value?.sepone}
                </Typography>
              </Box>
              <Box
                sx={{
                  px: "6px",
                  borderRadius: "16px",
                  background:
                    value?.septwo === "Healthcare" ? "#4318FF1A" : "#FF847C1A",
                  border:
                    value?.septwo === "Healthcare"
                      ? "0.5px solid #4318FF"
                      : "0.5px solid #FF847C",
                }}
              >
                <Typography sx={{ fontSize: "10px" }}>
                  {value?.septwo}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "10px",
                color: value?.name === "Name of the Raiser" ? null : "#808080",
              }}
            >
              {value?.name}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ my: "10px" }}>
        <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
          {value?.heading}
        </Typography>
        <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>
          {value?.body}
        </Typography>
      </Box>
      {!value?.status && (
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#E5E6FF",
            borderRadius: "50px",
            overflow: "hidden",
            mt: "10px",
            mb: "20px",
          }}
        >
          <Box
            sx={{ width: "60%", backgroundColor: "#FBBC05", height: "6.5px" }}
          />
        </Box>
      )}
      {value?.status && (
        <Box
          sx={{
            px: "6px",
            display: "inline-block",
            width: "auto",
            borderRadius: "16px",
            background:
              value?.status === "Acknowledged"
                ? "#FF847C1A"
                : value?.status === "Open"
                ? "#0054E71A"
                : value?.status === "On Hold"
                ? "#FFC3681A"
                : value?.status === "Escalated"
                ? "#FB8A051A"
                : value?.status === "Resolved"
                ? "#0297381A"
                : "white",
            border:
              value?.status === "Acknowledged"
                ? "0.5px solid #FF847C"
                : value?.status === "Open"
                ? "0.5px solid #0054E7"
                : value?.status === "On Hold"
                ? "0.5px solid #FFBF04"
                : value?.status === "Escalated"
                ? "0.5px solid #E77D00"
                : value?.status === "Resolved"
                ? "0.5px solid #029738"
                : "white",
          }}
        >
          <Typography
            sx={{
              color:
                value?.status === "Acknowledged"
                  ? "#FF847C"
                  : value?.status === "Open"
                  ? "#0054E7"
                  : value?.status === "On Hold"
                  ? "#FFBF04"
                  : value?.status === "Escalated"
                  ? "#E77D00"
                  : value?.status === "Resolved"
                  ? "#029738"
                  : "black",
              fontSize: "10px",
            }}
          >
            Status : {value?.status}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default RightBox;
