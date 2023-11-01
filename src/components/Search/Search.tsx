import styles from './search.module.scss'
import searchIcon from '../../img/search.svg'
import clearSearch from '../../img/clearSearch.svg'
import { useSelector } from "react-redux";
import { useRef } from 'react'
import { selectSearch, setSearch } from '../../redux/slices/filterSlice';
import { useAppDispatch } from '../../redux/store';

const Search: React.FC = () => {

    const search = useSelector(selectSearch);
    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement>(null);

    const onClickClear = () => {
        dispatch(setSearch(''))
        inputRef.current?.focus()
    }

    const searchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
       dispatch(setSearch(e.target.value))
    }


    return (
        <div className={styles.root}>
            <img className={styles.searchIcon} src={searchIcon} alt="searchIcon" />
            <input ref={inputRef} onChange={(e) => searchValue(e)} value={search} className={styles.search} placeholder="Поиск:" type="text" />
            {search && <img onClick={() => onClickClear()} className={styles.clearSearch} src={clearSearch} alt="clearSearch" />}
        </div>
    )
}
export default Search;