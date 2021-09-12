import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../imgs/Sem Título.png";

function Menu() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
        setValue(newValue)
  };
  
  return (
    <div>
      <img className="logoIMG" src={img} alt="logo" />
      <div className="menu">
        <Link to="/home" className="linkMenu">
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
            disableRipple={true}
              value={0}
              icon={
                <i
                  style={{
                    fontSize: "1.7em",
                    color: value === 0 ? "#101B29" : "#989898",
                    padding: "0.8em",
                    justifyContent: "center",
                    display: "flex",
                  }}
                  className="fas fa-th-large"
                ></i>
              }
            ></Tab>
          </Tabs>
        </Link>

        <Link to="/graduation" className="linkMenu">
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
            disableRipple={true}
              value={1}
              icon={
                <i
                  style={{
                    fontSize: "1.7em",
                    color: value === 1 ? "#101B29" : "#989898",
                    padding: "0.8em",
                    justifyContent: "center",
                    display: "flex",
                  }}
                  className="iconMenu fas fa-graduation-cap"
                ></i>
              }
            ></Tab>
          </Tabs>
        </Link>
        <Link to="/documents" className="linkMenu">
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
            disableRipple={true}
              value={2}
              icon={
                <i
                  style={{
                    fontSize: "1.7em",
                    color: value === 2 ? "#101B29" : "#989898",
                    padding: "0.8em",
                    justifyContent: "center",
                    display: "flex",
                  }}
                  className="far fa-file-alt"
                ></i>
              }
            ></Tab>
          </Tabs>
        </Link>
        <Link to="/statistic" className="linkMenu">
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
            disableRipple={true}
              value={3}
              icon={
                <i
                  style={{
                    fontSize: "1.7em",
                    color: value === 3 ? "#101B29" : "#989898",
                    padding: "0.8em",
                    justifyContent: "center",
                    display: "flex",
                  }}
                  className="iconMenu far fa-chart-bar"
                ></i>
              }
            ></Tab>
          </Tabs>
        </Link>

        <Link to="/finance" className="linkMenu">
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
            disableRipple={true}
              value={4}
              icon={
                <i
                  style={{
                    fontSize: "1.7em",
                    color: value === 4 ? "#101B29" : "#989898",
                    padding: "0.8em",
                    justifyContent: "center",
                    display: "flex",
                  }}
                  className="fas fa-money-bill"
                ></i>
              }
            ></Tab>
          </Tabs>
        </Link>

        <Link to="/help" className="linkMenu">
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
            disableRipple={true}
              value={5}
              icon={
                <i
                  style={{
                    fontSize: "1.7em",
                    color: value === 5 ? "#101B29" : "#989898",
                    padding: "0.8em",
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
    </div>
  );
}

export default Menu;
