import { useThemeContext } from "../hooks/ThemeContext";
import { useTheme, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MoonIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.37 5.51C9.19 6.15 9.1 6.82 9.1 7.5C9.1 11.58 12.42 14.9 16.5 14.9C17.18 14.9 17.85 14.81 18.49 14.63C17.45 17.19 14.93 19 12 19C8.14 19 5 15.86 5 12C5 9.07 6.81 6.55 9.37 5.51ZM12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 11.54 20.96 11.08 20.9 10.64C19.92 12.01 18.32 12.9 16.5 12.9C13.52 12.9 11.1 10.48 11.1 7.5C11.1 5.69 11.99 4.08 13.36 3.1C12.92 3.04 12.46 3 12 3Z"
        fill="black"
      />
    </svg>
  );
};

export const SunIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.76 5.3398L4.96 3.5498L3.55 4.9598L5.34 6.7498L6.76 5.3398ZM1 10.9998H4V12.9998H1V10.9998ZM11 1.0498H13V3.9998H11V1.0498ZM19.04 3.5448L20.448 4.9518L18.658 6.7418L17.251 5.3338L19.04 3.5448ZM17.24 18.6598L19.03 20.4598L20.44 19.0498L18.64 17.2598L17.24 18.6598ZM20 10.9998H23V12.9998H20V10.9998ZM12 5.9998C8.69 5.9998 6 8.6898 6 11.9998C6 15.3098 8.69 17.9998 12 17.9998C15.31 17.9998 18 15.3098 18 11.9998C18 8.6898 15.31 5.9998 12 5.9998ZM12 15.9998C9.79 15.9998 8 14.2098 8 11.9998C8 9.7898 9.79 7.9998 12 7.9998C14.21 7.9998 16 9.7898 16 11.9998C16 14.2098 14.21 15.9998 12 15.9998ZM11 19.9998H13V22.9498H11V19.9998ZM3.55 19.0398L4.96 20.4498L6.75 18.6498L5.34 17.2398L3.55 19.0398Z"
        fill="white"
      />
    </svg>
  );
};

export const GitHubIcon = () => {
  const { mode } = useThemeContext();

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 98 96"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
        fill={mode === "light" ? "#24292f" : "white"}
      />
    </svg>
  );
};

export const MenuIcon = () => {
  const theme = useTheme();
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1C0 0.447715 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1C18 1.55228 17.5523 2 17 2H1C0.447715 2 0 1.55228 0 1Z"
        fill={theme.palette.custom.icon}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 7C0 6.44772 0.447715 6 1 6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H1C0.447715 8 0 7.55228 0 7Z"
        fill={theme.palette.custom.icon}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 13C0 12.4477 0.447715 12 1 12H17C17.5523 12 18 12.4477 18 13C18 13.5523 17.5523 14 17 14H1C0.447715 14 0 13.5523 0 13Z"
        fill={theme.palette.custom.icon}
      />
    </svg>
  );
};

export const SearchIcon = () => {
  const theme = useTheme();
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.2344 15.3202L21.2071 19.2929C21.5976 19.6834 21.5976 20.3166 21.2071 20.7071C20.8166 21.0976 20.1834 21.0976 19.7929 20.7071L15.946 16.8602C14.5179 18.1879 12.6038 19 10.5 19C6.08172 19 2.5 15.4183 2.5 11C2.5 6.58172 6.08172 3 10.5 3C14.9183 3 18.5 6.58172 18.5 11C18.5 12.5913 18.0354 14.0741 17.2344 15.3202ZM16.5 11C16.5 7.68629 13.8137 5 10.5 5C7.18629 5 4.5 7.68629 4.5 11C4.5 14.3137 7.18629 17 10.5 17C13.8137 17 16.5 14.3137 16.5 11Z"
        fill={theme.palette.custom.icon}
      />
    </svg>
  );
};

export const ChevronTopIcon = () => {
  const theme = useTheme();
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.54289 15.7071C5.93342 16.0976 6.56658 16.0976 6.95711 15.7071L12.25 10.4142L17.5429 15.7071C17.9334 16.0976 18.5666 16.0976 18.9571 15.7071C19.3476 15.3166 19.3476 14.6834 18.9571 14.2929L12.9571 8.29289C12.5666 7.90237 11.9334 7.90237 11.5429 8.29289L5.54289 14.2929C5.15237 14.6834 5.15237 15.3166 5.54289 15.7071Z"
        fill={theme.palette.custom.icon}
      />
    </svg>
  );
};

export const ChevronBottomIcon = () => {
  const theme = useTheme();
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.54289 8.29289C5.93342 7.90237 6.56658 7.90237 6.95711 8.29289L12.25 13.5858L17.5429 8.29289C17.9334 7.90237 18.5666 7.90237 18.9571 8.29289C19.3476 8.68342 19.3476 9.31658 18.9571 9.70711L12.9571 15.7071C12.5666 16.0976 11.9334 16.0976 11.5429 15.7071L5.54289 9.70711C5.15237 9.31658 5.15237 8.68342 5.54289 8.29289Z"
        fill={theme.palette.custom.icon}
      />
    </svg>
  );
};

export const StarIcon = () => {
  return (
    <svg
      height="24"
      width="24"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 47.94 47.94"
      xmlSpace="preserve"
    >
      <path
        fill="#ED8A19"
        d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
          c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
          c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
          c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
          c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
          C22.602,0.567,25.338,0.567,26.285,2.486z"
      />
    </svg>
  );
};

const StyledGridOverlay = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  // margin: 10,
  marginTop: 50,
  "& .ant-empty-img-1": {
    fill: theme.palette.mode === "light" ? "#aeb8c2" : "#262626",
  },
  "& .ant-empty-img-2": {
    fill: theme.palette.mode === "light" ? "#f5f5f7" : "#595959",
  },
  "& .ant-empty-img-3": {
    fill: theme.palette.mode === "light" ? "#dce0e6" : "#434343",
  },
  "& .ant-empty-img-4": {
    fill: theme.palette.mode === "light" ? "#fff" : "#1c1c1c",
  },
  "& .ant-empty-img-5": {
    fillOpacity: theme.palette.mode === "light" ? "0.8" : "0.08",
    fill: theme.palette.mode === "light" ? "#f5f5f5" : "#fff",
  },
}));

export function NoDataIcon() {
  return (
    <StyledGridOverlay>
      <svg
        width="120"
        height="100"
        viewBox="0 0 184 152"
        aria-hidden
        focusable="false"
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(24 31.67)">
            <ellipse
              className="ant-empty-img-5"
              cx="67.797"
              cy="106.89"
              rx="67.797"
              ry="12.668"
            />
            <path
              className="ant-empty-img-1"
              d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
            />
            <path
              className="ant-empty-img-2"
              d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
            />
            <path
              className="ant-empty-img-3"
              d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
            />
          </g>
          <path
            className="ant-empty-img-3"
            d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
          />
          <g className="ant-empty-img-4" transform="translate(149.65 15.383)">
            <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
            <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
          </g>
        </g>
      </svg>
      <Typography variant="body1" color="text.secondary">
        Data unavailable
      </Typography>
    </StyledGridOverlay>
  );
}
