import arrowTop from '../../img/arrow-top.svg'
import arrowLeft from '../../img/grey-arrow-left.svg'
import { useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from 'react';
import { selectSortingBy, setSortingBy } from "../../redux/slices/filterSlice";
import { useAppDispatch } from '../../redux/store';

type SortArr = {
    name: string;
    sort: string;
}

export const sortingArr: SortArr[] = [
    { name: "популярности", sort: 'rating' },
    { name: "цене", sort: 'price' },
    { name: "алфавиту", sort: 'title' }
]

type SortProps = {
    sortingCategories: string;
    setSortingCategories: (sort: string) => void;
}

const Sort: React.FC<SortProps> = ({ sortingCategories, setSortingCategories }) => {

    const sortRef = useRef<HTMLDivElement>(null)
    const sortingBy = useSelector(selectSortingBy);
    const dispatch = useAppDispatch();
    
    const [sort, setSort] = useState(false);

    const clickSetSortingCategories = (name: string, sort: string) => {
        setSortingCategories(sort)
        dispatch(setSortingBy(name))
        setSort(false)
    }

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (sortRef.current && !e.composedPath().includes(sortRef.current)) {
                setSort(false)
            }
        }
        document.body.addEventListener('click', handleClickOutside)
        
        return() => {
            document.body.removeEventListener('click', handleClickOutside)
        }

    }, [])

    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                <img src={!sort ? arrowTop : arrowLeft} alt="arrowTop" />
                <b>Сортировка по:</b>
                <span onClick={() => setSort(!sort)}>{sortingBy}</span>
            </div>
            {sort && <div className="sort__popup">
                <ul>
                    {sortingArr.map((items, index) => (
                        <li onClick={() => clickSetSortingCategories(items.name, items.sort)}
                            className={Number(sortingCategories) === index ? 'active' : ''}
                            key={index}>
                            {items.name}
                        </li>
                    ))}
                </ul>
            </div>}
        </div>
    )
}
export default Sort;