import React from "react";
import foodData from "../../data/foodData";

class Questions {

  render() {
    return (
      <div className="question-prompt">
        <div className="modal">
          {foodData.map((food, i) => {
            {
              console.log(food.question);
            }
            return (
              <div className="questions">
                <h3>{food.question}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Questions;
