import emptyCart from '../../img/empty-cart.png'
import { Link } from 'react-router-dom';

const CartEmpty: React.FC = () => {
    return (
        <div className="content">
            <div className="container container--cart">
                <div className="cart cart--empty">
                    <h2>Корзина пуста 😕</h2>
                    <p>
                        Вероятней всего, вы еще не сделали заказ .<br />
                        Для того, чтобы сделать заказ, перейдите на главную страницу.
                    </p>
                    <img src={emptyCart} alt="Empty cart" />
                    <Link to="/">
                        <button className="button button--black">
                            <span>Вернуться назад</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartEmpty;