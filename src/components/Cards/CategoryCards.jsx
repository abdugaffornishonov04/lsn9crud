import PropTypes from "prop-types";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const CategoryCards = ({theData}) => {
  console.log(theData);
  return (
    <Fragment>
      {theData.map((el, i) => {
        return (
          <div key={i} className="category-card">
            <div className="cc-left">
              <h3>{el.description}</h3>
              <p>{el.name}</p>
              <p>{el.text}</p>
            </div>
            <div className="cc-right">
              <img src={el.image} alt="" />
            </div>
            <button className="edit-btn-of-category ">
              Edit
            </button>
            <NavLink className="see-foods-link" to="city/:id">
              See foods
            </NavLink>
            <button className="delete-btn-of-category ">
              Delete
            </button>
          </div>
        );
      })}
    </Fragment>
  );
}

CategoryCards.propTypes = {
  theData: PropTypes.array, 
};

export default CategoryCards