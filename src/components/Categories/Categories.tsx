type CategoriesProps = {
  categoryId: number;
  setCategoryId: (index: number) => void;
}

const Categories: React.FC<CategoriesProps> = ({categoryId, setCategoryId}) => {

  const pizzaCategories = ["Все", "Новинки", "Акция", "Классический вкус", "С рисом", "С морепродуктами"]

  return (
    <div className="categories">
      <ul>
        {pizzaCategories.map((item, index) => (
          <li
          key={index}
          onClick={() => setCategoryId(index)} 
          className={categoryId === index ? "active": ''} 
          >{item}</li>
        ))}
      </ul>
    </div>
  )
}
export default Categories;