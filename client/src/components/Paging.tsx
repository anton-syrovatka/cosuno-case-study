import { Paging as PagingProps } from '../api/definitions';
import './Paging.css';

interface SearchProps {
  pagingProps: PagingProps;
  onChange: (page: number) => void;
}

const Paging = ({ onChange, pagingProps }: SearchProps) => {
  const {
    page = 0,
    hasPrevPage,
    hasNextPage,
    limit = 0,
    total = 0,
  } = pagingProps || ({} as Partial<PagingProps>);

  return (
    <div className="Paging">
      <div className="Paging-meta">
        {hasPrevPage ? (page - 1) * limit + 1 : 1} - {page * limit > total ? total : page * limit}{' '}
        of {total}
      </div>
      <button
        className="Paging-button left"
        onClick={() => onChange(page - 1)}
        disabled={!hasPrevPage}
      >
        ←
      </button>
      <button
        className="Paging-button right"
        onClick={() => onChange(page + 1)}
        disabled={!hasNextPage}
      >
        →
      </button>
    </div>
  );
};

export default Paging;
