import React from "react";
import { Stack, Box, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Box sx={{ mt: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography
        textAlign="center"
        variant="h3"
        mb="33px"
        sx={{ fontSize: { lg: "48px", xs: "35px" } }}
      >
        Watch{" "}
        <span style={{ color: "#9b560b", textTransform: "capitalize" }}>{name}</span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="center"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row", sm: "row" },
          gap: { lg: "110px", sm: "80px", xs: "0" },
        }}
      >
        {exerciseVideos?.slice(0, 4).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h5" color="#000">
                {item.video.title}
              </Typography>
              <Typography variant="h6" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
