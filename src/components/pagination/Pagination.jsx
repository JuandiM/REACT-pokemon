import React from "react";
import "./pagination.scss";

const Pagination = (props) => {
  const { onLeftClick, onRightClick, page, totalPages } = props;

  return (
    <div className="pagination">
      <button className="btn1" onClick={onLeftClick}>
        Previous
      </button>
      <div className="page">
        {page} of {totalPages} pages
      </div>
      <button className="btn2" onClick={onRightClick}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
