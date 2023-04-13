import MealCard  from "./MealCard";
import React from "react";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const MealsAvailable = () => {
  const meals = DUMMY_MEALS.map((meal) => 
    <MealCard
      key={meal.id}
      item={meal.name}
      description={meal.description}
      price={meal.price}
    />
  );
  return (
    <div className="mx-auto w-1/2 p-2 my-2 rounded-xl bg-yellow-50 text-neutral-950">
      {meals}
    </div>
  );
};

export default MealsAvailable;







// import React from "react";

// const MealsAvailable = () => {
//   return (
//     <div className="m-auto w-min">
//       <table className="table">
//         <tbody>
//           {/* row 1 */}
//           <div>
//             <div>Cy Ganderton</div>
//             <stat-desc  >Quality Condivol Specialist</stat-desc>
//             <div>Blue</div>
//           </div>
//           {/* row 2 */}
//           <div className="hover">
//             <div>Hart Hagerty <span>@</span></div>
//             <div>Desktop Support Technician</div>
//             <div>Purple</div>
//           </div>
//           {/* row 3 */}
//           <div>
//             <div>Brice Swyre</div>
//             <div>Tax Accountant</div>
//             <div>Red</div>
//           </div>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MealsAvailable;
