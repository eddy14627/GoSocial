import { Box } from "@mui/system";
import React from "react";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`https://social-media-app-lac.vercel.app/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
