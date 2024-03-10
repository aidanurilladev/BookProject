import React from "react";
import Pagination from "@mui/material/Pagination";
import { useProduct } from "../../context/ProductContext";

export default function PaginationCard() {
  const { setPage, count, currentPage } = useProduct();
  function handleClick(p, n) {
    setPage(n);
  }
  return (
    <Pagination
      onClick={handleClick}
      count={count}
      variant="outlined"
      shape="rounded"
    />
  );
}
