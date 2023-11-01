import style from './notFoundInfo.module.scss'

const NotFoundInfo: React.FC = () => {
    return (
        <h1 className={style.not_found}>
            <span>☹️</span>
            <br />
            По данному запросу ничего не найдено
        </h1>
    )
}

export default NotFoundInfo;