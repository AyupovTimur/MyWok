import cartIcon from '../img/cart.svg';
import trachSvg from '../img/trash.svg';
import greyArrow from '../img/grey-arrow-left.svg';
import CartEmpty from '../components/CartEmpty/CartEmpty';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartItems from '../components/CartItems/CartItems';
import { clearItems, selectItems, selectTotalPrice } from '../redux/slices/cartSlice';
import { useAppDispatch } from '../redux/store';

const Cart: React.FC = () => {

    const dispatch = useAppDispatch()
    const items = useSelector(selectItems);
    const totalPrice = useSelector(selectTotalPrice);

    const totalCount = items.reduce((sum, item) => sum + item.count, 0)

    const clickClearItems = () => {
        dispatch(clearItems())
    }

    return (
        <>
            {items.length > 0 ?
                <div className="container container--cart">
                    <div className="cart">
                        <div className="cart__top">
                            <h2 className="content__title">
                                <img className='cartIcon' src={cartIcon} alt="cartIcon" />
                                Корзина
                            </h2>
                            <div className="cart__clear">
                                <img src={trachSvg} alt="trashSvg" />
                                <span onClick={clickClearItems} >Очистить корзину</span>
                            </div>
                        </div>

                        <div className="content__items-cart">

                            {items.map((item, index) => (
                                <CartItems
                                    key={index}
                                    id={item.id}
                                    imageUrl={item.imageUrl}
                                    title={item.title}
                                    type={item.type}
                                    size={item.size}
                                    price={item.price}
                                    count={item.count}
                                ></CartItems>
                            ))}

                        </div>
                        <div className="cart__bottom">
                            <div className="cart__bottom-details">
                                <span> Всего: <b>{totalCount} шт.</b> </span>
                                <span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
                            </div>
                            <div className="cart__bottom-buttons">
                                <Link to="/">
                                    <div className="button button--outline button--add go-back-btn">
                                        <img src={greyArrow} alt="greyArrow" />
                                        <span>Вернуться назад</span>
                                    </div>
                                </Link>
                                <div className="button pay-btn">
                                    <span>Оплатить сейчас</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : <CartEmpty />}
        </>
    )
}
export default Cart;