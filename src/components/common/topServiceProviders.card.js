import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import React from "react";

const TopServiceProvidersCard = ({ value }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: "10px",
        p: "10px",
        border: "1px solid #CCCCCC",
        width: { xs: "90%", sm: "20%" },
      }}
    >
      <Box
        component="img"
        src={value.img}
        sx={{
          width: "100%",
        }}
      />
      <Typography
        sx={{
          mt: "10px",
          fontWeight: 600,
        }}
      >
        {value?.title}
      </Typography>
      <Box
        sx={{
          mt: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <AvatarGroup max={value?.ProfileImg?.length}>
            {value?.ProfileImg?.map((img, index) => (
              <Avatar
                key={index}
                alt={`Img ${index + 1}`}
                src={img}
                sx={{ width: "30px", height: "30px" }}
              />
            ))}
          </AvatarGroup>
          <Typography sx={{ fontSize: "10px", ml: "5px" }}>
            {value?.newAdded}
          </Typography>
        </Box>
        <Box
          sx={{
            px: "8px",
            borderRadius: "5px",
            backgroundColor: "#E6F8EF",
          }}
        >
          <Typography sx={{ fontSize: "12px", color: "#18CE98" }}>
            {value?.percent}%
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TopServiceProvidersCard;
