import css1 from "../img/portImages/spotify.png";
import css2 from "../img/portImages/real-state.png";
import css3 from "../img/portImages/QR.png";
import css4 from "../img/portImages/expense.png";

// TODO: Project section
const portfolios = [
  {
    id: 1,
    category: "React",
    image: css1,
    link1: "https://github.com/rishonkumar/Spotify-Clone",
    link2: "https://rishon-music-clone-app.netlify.app/",
    title: "Spotify Clone",
    text: "Music App ",
  },
  {
    id: 2,
    category: "React",
    image: css2,
    link1: "https://github.com/rishonkumar/realstate_react_project",
    link2: "https://realstate-react-project.vercel.app/",
    title: "Real State App",
    text: "App for people who are looking for room or people who want to rent their home",
  },
  {
    id: 3,
    category: "Javascript",
    image: css3,
    link1: "https://github.com/rishonkumar/QR_Generate_JS",
    link2: "https://rishon-qrcode.netlify.app/",
    title: "QR Code Generator",
    text: "Create QR Code for any website you want",
  },
  {
    id: 4,
    category: "React",
    image: css4,
    link1: "https://github.com/rishonkumar/react-basic",
    link2: "https://expense-tracker-app-react-rishon.netlify.app/",
    title: "Monthly Expense Tracker",
    text: "Created Expense Tracker for user to track the Monthly Expenditure",
  },
];

export default portfolios;
