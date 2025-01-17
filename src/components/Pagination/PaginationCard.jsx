import React from "react";
import Pagination from "@mui/material/Pagination";
import { useProduct } from "../../context/ProductContext";

export default function PaginationCard() {
  const { setPage, count } = useProduct();
  function handleClick(p, n) {
    setPage(n);
  }
  return (
    <Pagination onChange={handleClick} count={count} color="primary" />
  );
}
