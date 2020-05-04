const totalPages = 100;
const pageSelected = 66;

const onSelect = (n) => {
  console.log('-->  onSelect()', n);
}

const onClick = which => {
  console.log('which',which)
  const selected = {
    first: 1,
    last: totalPages,
    less: pageSelected > 1 && pageSelected - 1,
    more: pageSelected < totalPages && pageSelected + 1,
  }[which] || (which !== pageSelected && which);

  if (typeof selected === 'number') onSelect(selected);
};

onClick('first');
onClick('last');
onClick('less');
onClick('more');
onClick(10);
