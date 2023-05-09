import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

useEffect(() => {
  document.title = "FAQS | BEYOND IMAGINATION";
}, []);

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(0, 0, 0)" : "rgba(0, 0, 0)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function Faq() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="faqContainer">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className="faqWrapper"
        sx={{ border: 0 }}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Payment methods</Typography>
        </AccordionSummary>
        <AccordionDetails className="faqDetail">
          <Typography>
            We accept all payment methods that fall under the category of credit
            and debit cards.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* separador */}
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        className="faqWrapper"
        sx={{ border: 0 }}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Prices</Typography>
        </AccordionSummary>
        <AccordionDetails className="faqDetail">
          <Typography>
            The prices are shown in the Products section on the card of the
            corresponding course.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* separador */}
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        className="faqWrapper"
        sx={{ border: 0 }}
        variant="standard"
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Is there some kind of time penalty?</Typography>
        </AccordionSummary>
        <AccordionDetails className="faqDetail">
          <Typography>
            No, we do not penalize for time, we believe that studying is a
            pleasure and we support studying at the time each person wishes and
            feels comfortable.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* separador */}
    </div>
  );
}
