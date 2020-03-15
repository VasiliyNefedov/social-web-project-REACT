import React from "react";
import style from "./paginator.module.css";

const Paginator = ({ onPageChanged, currentPage, totalCount, pageSize }) => {
  let pagesCount = Math.ceil(totalCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let showedNumbers = pages.filter(
    pageNumber => pageNumber > currentPage - 3 && pageNumber < currentPage + 3
  );

  return (
    <div className={style.pages}>
      {currentPage > 20 && (
        <span
          onClick={() => onPageChanged(currentPage - 20)}
          className={style.button}
        >
          {" "}
          -20{" "}
        </span>
      )}
      {currentPage > 5 && (
        <span
          onClick={() => onPageChanged(currentPage - 5)}
          className={style.button}
        >
          {" "}
          -5{" "}
        </span>
      )}
      {showedNumbers.map(el => {
        return (
          <span
            onClick={() => onPageChanged(el)}
            className={currentPage === el ? `${style.selectedPage}` : `${style.number}`}
          >
            {`${el}`}
          </span>
        );
      })}
      {currentPage <= pagesCount - 5 && (
        <span
          onClick={() => onPageChanged(currentPage + 5)}
          className={style.button}
        >
          {" "}
          +5{" "}
        </span>
      )}
      {currentPage <= pagesCount - 20 && (
        <span
          onClick={() => onPageChanged(currentPage + 20)}
          className={style.button}
        >
          {" "}
          +20{" "}
        </span>
      )}
    </div>
  );
};

export default Paginator;
