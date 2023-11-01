import ReactPaginate from "react-paginate";
import styles from './pagination.module.scss'

type PaginationProps = {
    setPage: (event: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ setPage }) => {
    return (
        <ReactPaginate
                className={styles.pagination}
                breakLabel="..."
                nextLabel=">"
                previousLabel="<"
                onPageChange={(event) => setPage(event.selected + 1)}
                pageRangeDisplayed={4}
                pageCount={3}
                renderOnZeroPageCount={null}
            />
    )
}
export default Pagination;