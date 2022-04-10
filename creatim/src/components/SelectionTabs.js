import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function SelectionTabs({
  allFilterHandler,
  filterHandler,
  value,
  handleChange,
}) {
  return (
    <div>
      {" "}
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab onClick={allFilterHandler} label="ALL" />
          <Tab
            onClick={() => {
              filterHandler("veg");
            }}
            name="veg"
            label="Veggies"
          />
          <Tab
            onClick={() => {
              filterHandler("grain");
            }}
            name="grain"
            label="Grains"
          />
          <Tab
            onClick={() => {
              filterHandler("fruit");
            }}
            name="fruit"
            label="Fruits"
          />
        </Tabs>
      </Box>
    </div>
  );
}

export default SelectionTabs;
