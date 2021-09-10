import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Menu() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ position: "fixed", top: "20em", margin: "1px" }}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Tabs
          TabIndicatorProps={{
            style: {
              background: "black",
              width: "7px",
              borderRadius: "15px 0px 0px 20px",
            },
          }}
          orientation="vertical"
          className="rotate"
          value={value}
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab
            value={0}
            icon={
              <i
                style={{
                  fontSize: "1.7em",
                  color: value === 0 ? "#101B29" : "#989898",
                  padding: "0.4em",
                  justifyContent: "center",
                  display: "flex",
                }}
                className="fas fa-th-large"
              ></i>
            }
          ></Tab>
        </Tabs>
      </Link>

      <Link to="/" style={{ textDecoration: "none" }}>
        <Tabs
          TabIndicatorProps={{
            style: {
              background: "black",
              width: "7px",
              borderRadius: "15px 0px 0px 20px",
            },
          }}
          orientation="vertical"
          className="rotate"
          value={value}
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab
            value={1}
            icon={
              <i
                style={{
                  fontSize: "1.7em",
                  color: value === 1 ? "#101B29" : "#989898",
                  padding: "0.4em",
                  justifyContent: "center",
                  display: "flex",
                }}
                className="iconMenu fas fa-graduation-cap"
              ></i>
            }
          ></Tab>
        </Tabs>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Tabs
          TabIndicatorProps={{
            style: {
              background: "black",
              width: "7px",
              borderRadius: "15px 0px 0px 20px",
            },
          }}
          orientation="vertical"
          className="rotate"
          value={value}
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab
            value={2}
            icon={
              <i
                style={{
                  fontSize: "1.7em",
                  color: value === 2 ? "#101B29" : "#989898",
                  padding: "0.4em",
                  justifyContent: "center",
                  display: "flex",
                }}
                className="far fa-file-alt"
              ></i>
            }
          ></Tab>
        </Tabs>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Tabs
          TabIndicatorProps={{
            style: {
              background: "black",
              width: "7px",
              borderRadius: "15px 0px 0px 20px",
            },
          }}
          orientation="vertical"
          className="rotate"
          value={value}
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab
            value={3}
            icon={
              <i
                style={{
                  fontSize: "1.7em",
                  color: value === 3 ? "#101B29" : "#989898",
                  padding: "0.4em",
                  justifyContent: "center",
                  display: "flex",
                }}
                className="iconMenu far fa-chart-bar"
              ></i>
            }
          ></Tab>
        </Tabs>
      </Link>

      <Link to="/" style={{ textDecoration: "none" }}>
        <Tabs
          TabIndicatorProps={{
            style: {
              background: "black",
              width: "7px",
              borderRadius: "15px 0px 0px 20px",
            },
          }}
          orientation="vertical"
          className="rotate"
          value={value}
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab
            value={4}
            icon={
              <i
                style={{
                  fontSize: "1.7em",
                  color: value === 4 ? "#101B29" : "#989898",
                  padding: "0.4em",
                  justifyContent: "center",
                  display: "flex",
                }}
                className="fas fa-money-bill"
              ></i>
            }
          ></Tab>
        </Tabs>
      </Link>

      <Link to="/" style={{ textDecoration: "none" }}>
        <Tabs
          TabIndicatorProps={{
            style: {
              background: "black",
              width: "7px",
              borderRadius: "15px 0px 0px 20px",
            },
          }}
          orientation="vertical"
          className="rotate"
          value={value}
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab
            value={5}
            icon={
              <i
                style={{
                  fontSize: "1.7em",
                  color: value === 5 ? "#101B29" : "#989898",
                  padding: "0.4em",
                  justifyContent: "center",
                  display: "flex",
                }}
                className="iconMenu far fa-question-circle"
              ></i>
            }
          ></Tab>
        </Tabs>
      </Link>
    </div>
  );
}

export default Menu;
