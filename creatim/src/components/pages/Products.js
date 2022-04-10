import React, { useEffect, useState } from "react";
import axios from "axios";
import SelectionTabs from "../SelectionTabs";
import ProductDisplay from "../ProductDisplay";

function Products() {
  const [totalData, setTotalData] = useState([]);
  const [dataList, setDataList] = useState([]);
  const [moreData, setMoreData] = useState([]);
  const [value, setValue] = useState(0);
  const [page, setPage] = useState(2);

  async function getData() {
    const { data } = await axios.get(
      `http://localhost:3004/posts?_page=1&_limit=8`
    );
    if (data) {
      setDataList(data);
    }
  }

  async function allData() {
    const { data } = await axios.get(`http://localhost:3004/posts`);
    if (data) {
      setTotalData(data);
    }
  }

  async function fetchMore() {
    const { data } = await axios.get(
      `http://localhost:3004/posts?_page=${page}&_limit=8`
    );
    if (data) {
      setMoreData(data);
    }
  }

  useEffect(() => {
    getData();
    allData();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function allFilterHandler() {
    setDataList(() => {
      return [...totalData];
    });
  }

  function filterHandler(Categoty) {
    if (!totalData) {
      return "Loading....";
    } else {
      setDataList(() => {
        return totalData.filter((item, i) => {
          return item.ref === Categoty;
        });
      });
    }
  }

  // ----fetching more data -----

  function nextFunction() {
    fetchMore();
    setDataList((preVal) => {
      return [...preVal, ...moreData];
    });

    setPage(page + 1);
  }

  return (
    <div className="product-wrap">
      <div className="tabs">
        <SelectionTabs
          allFilterHandler={allFilterHandler}
          filterHandler={filterHandler}
          value={value}
          handleChange={handleChange}
        />
      </div>

      <div className="product-display">
        <ProductDisplay dataList={dataList} nextFunction={nextFunction} />
      </div>
    </div>
  );
}

export default Products;
