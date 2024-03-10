import  React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useState } from "react";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Литература — это самый приятный способ игнорировать жизнь. ",
    imgPath: "https://basecamplive.com/wp-content/uploads/2023/02/books.jpeg",
    author: " Фернандо Пессоа",
  },
  {
    label:
      "Мой лучший друг-это человек, который даст мне книгу, которую я не читал. ",
    imgPath:
      "https://images.squarespace-cdn.com/content/v1/5c675e59b7c92cfb06a3a0e1/1553521179040-6VLIUMLXVUCQ55O4CBMQ/Kutse.jpg",
    author: "Авраам Линкольн",
  },
  {
    label:
      "Книги – самые тихие и самые постоянные друзья, они самые доступные и мудрейшие советники, и самые терпеливые учителя. ",
    imgPath:
      "https://t3.ftcdn.net/jpg/03/13/53/94/360_F_313539495_TIfAx53PwhMQopiuu7J1RiY2lVzSWrep.jpg",
    author: "Чарльз Уильям Элиот",
  },
  {
    label: "Чтение то же для ума, что упражнения для тела. ",
    imgPath: "https://content.img-gorod.ru//content/uf/13/677/13677.png",
    author: "Джозеф Аддисон",
  },
];

function NavbarCarusel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box className="carusel">
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            <Typography
              sx={{
                fontWeight: "bold",
              }}
              variant="h3"
              className="label"
            >
              {step.label}
            </Typography>
            <Typography
              
              variant="h2"
              className="author"
            >
              {step.author}
            </Typography>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: "700px",
                  display: "block",
                  width: "100%",
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  );
}

export default NavbarCarusel;
