import React from "react";

interface Props {
  swatchesPerPage: number;
  totalSwatches: number;
  updateCurrentPage: (
    event: { preventDefault: () => void },
    pageNumber: number
  ) => void;
}

class Pagination extends React.Component<Props, {}> {
  getPageNumbers = (): number[] => {
    const pageNumbers = [];

    for (
      let i = 1;
      i <= Math.ceil(this.props.totalSwatches / this.props.swatchesPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  render() {
    return (
      <ul className="pagination">
        {this.getPageNumbers().map(number => (
          <li key={number} className="page-number">
            <a
              onClick={event => this.props.updateCurrentPage(event, number)}
              href="!#"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default Pagination;
