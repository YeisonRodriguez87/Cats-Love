import React from "react";
import { Button } from "react-bootstrap";

export default function Paginated({ catsPerPage, allCats, paged }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCats / catsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <nav>
        <ul>
          {pageNumbers?.map((number) => (
            <Button variant="secondary" key={number} onClick={() => paged(number)}>
              {number}
            </Button>
          ))}
        </ul>
      </nav>
    </>
  );
}
