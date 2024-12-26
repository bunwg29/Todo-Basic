import { useContext, useMemo } from "react";
import { CATEGORY_ITEMS } from "../constants";
import { AppContext } from "../context/AppProvider";
import "./CategoryList.css";
import PropTypes from "prop-types";

function CategoryList({ todoList }) {
  const { selectedCategoryId, setSelectedCategoryId } = useContext(AppContext);

  const countByCategory = useMemo(() => {
    return todoList.reduce(
      (acc, cur) => ( { ...acc, [cur.category]: acc[cur.category] + 1 } ),
      {
        personal: 0,
        company: 0,
        travel: 0,
        idea: 0,
      }
    );
  }, [todoList]);

  return (
    <div>
      <p>Categories</p>
      <div>
        {CATEGORY_ITEMS.map((category) => {
          return (
            <div
              key={category.id}
              className={`category-item ${
                category.id === selectedCategoryId ? "selected" : ""
              }`}
              onClick={() => setSelectedCategoryId(category.id)}
            >
              <p className="category-name">{category.label}</p>
              <p>{countByCategory[category.id]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

CategoryList.propTypes = {
  todoList: PropTypes.array,
};
export default CategoryList;
