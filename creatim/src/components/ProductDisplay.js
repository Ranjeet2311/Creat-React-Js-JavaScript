import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "./SingleCard";

function ProductDisplay({ dataList, nextFunction }) {
  return (
    <div>
      {" "}
      <InfiniteScroll
        dataLength={dataList.length}
        className="product-display"
        next={nextFunction}
        hasMore={true}
        loader={<h2>Loading...</h2>}
      >
        {dataList.map((item, index) => {
          return (
            <Card key={index} id={item.id} img={item.img} title={item.title} />
          );
        })}
      </InfiniteScroll>
    </div>
  );
}

export default ProductDisplay;
