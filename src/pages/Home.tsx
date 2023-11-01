import { useEffect } from "react";
import Pagination from "../components/Pagination/Pagination";
import { useSelector } from "react-redux";
import { setCategoryId, setSortingCategories, setPage, selectCategoryId, selectSortingCategories, selectPage, selectSearch } from "../redux/slices/filterSlice";
import { fetchPizzas, selectIsLoading, selectPizzaItems } from "../redux/slices/pizzaSlice";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock"
import Skeleton from "../components/PizzaBlock/Skeleton";
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import { useAppDispatch } from "../redux/store";

const Home: React.FC = () => {

    const dispatch = useAppDispatch();

    const categoryId = useSelector(selectCategoryId);
    const sortingCategories = useSelector(selectSortingCategories);
    const page = useSelector(selectPage);
    const search = useSelector(selectSearch);

    const pizzaItems = useSelector(selectPizzaItems);
    const isLoading = useSelector(selectIsLoading);


    useEffect(() => {
        dispatch(fetchPizzas({
            page,
            categoryId,
            sortingCategories,
            search
        }));
    }, [categoryId, sortingCategories, search, page, dispatch])


    return (
        <>
            <div className="content__top">
                <Categories categoryId={categoryId} setCategoryId={(index) => dispatch(setCategoryId(index))} />
                <Sort sortingCategories={sortingCategories} setSortingCategories={(sort) => dispatch(setSortingCategories(sort))} />
            </div>
            <h2 className="content__title">Успейте попробовать</h2>
            <div className="content__items">
                {
                    isLoading === 'error' ? 
                        <div className="content__error-info">
                            <h2>Ошибка. Пиццы не загрузились😕</h2> 
                        </div>
                        : isLoading === 'loading' ? [...new Array(4)].map((_, index) => <Skeleton key={index} />) : pizzaItems
                    .map((items, index) => (
                        <PizzaBlock
                            key={index}
                            id={items.id}
                            imageUrl={items.imageUrl}
                            title={items.title}
                            types={items.types}
                            sizes={items.sizes}
                            price={items.price}
                            />
                    ))
                }
            </div>
            <Pagination setPage={(e) => dispatch(setPage(e))} />
        </>
    )
}
export default Home;