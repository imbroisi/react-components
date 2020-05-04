import React from 'react';

import Container from './styles';
import Box from './Box';

const Pagination = props => {
  const { maxPagesToShow, totalPages, pageSelected, onSelect } = props;

  const pagesToShow = totalPages < maxPagesToShow ? totalPages : maxPagesToShow;

  if (pagesToShow < 2) return null

  const onClick = which => {
    const selected = {
      first: 1,
      last: totalPages,
      less: pageSelected > 1 && pageSelected - 1,
      more: pageSelected < totalPages && pageSelected + 1,
    }[which] || (which !== pageSelected && which);

    if (typeof selected === 'number') onSelect(selected);
  };

  const centerReference = parseInt((pagesToShow + 1) / 2, 10);
  let firstPageToShow;

  if (pageSelected < centerReference) {
    firstPageToShow = 1;
  } else if (pageSelected + centerReference > totalPages) {
    firstPageToShow = totalPages - pagesToShow + 1;
  } else {
    firstPageToShow = pageSelected - centerReference + 1;
  }

  const pagesArray = []
  for (let i = 0; i < pagesToShow; i += 1) {
    pagesArray.push(firstPageToShow + 1)
  }

  if (totalPages < 2) return null

  return (
    <Container>
      {totalPages > maxPagesToShow && (
        <Box onClick={() => onClick('first')} disableBorder>
          &lt;&lt;
        </Box>
      )}
      <Box onClick={() => onClick('less')}>&lt;</Box>

      {pagesArray.map((pageNum, index) => {
        const showEtc =
          totalPages > maxPagesToShow &&
          ((index === 0 && pageNum !== 1) ||
            (index === pagesArray.length - 1 && pageNum !== totalPages))
        return showEtc ? (
          <Box key={pageNum}>...</Box>
        ) : (
          <Box onClick={() => onClick(pageNum)} selected={pageNum === pageSelected} key={pageNum}>
            {pageNum}
          </Box>
        )
      })}

      <Box onClick={() => onClick('more')}>&gt;</Box>
      {totalPages > maxPagesToShow && <Box onClick={() => onClick('last')}>&gt;&gt;</Box>}
    </Container>
  )
}

export default Pagination;
