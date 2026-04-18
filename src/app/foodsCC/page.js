"use client";

import FoodCard from "@/components/foods/FoodCard";
import NoFood from "@/components/foods/NoFood";
// import FoodCard from "@/components/foods/foodCard";
// import Food
import React, { useEffect } from "react";

import { useState } from "react";

const FoodsCC = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchingInpt, setSearchingInput] = useState("");
  console.log(searchingInpt);

  const fetchFoods = () => {
    setLoading(true);
    setFoods([
      [
        {
          id: "food_001",
          dish_name: "Mediterranean Chicken Rice Plate",
          alternative_names: [
            "Chicken Rice Power Bowl",
            "Grilled Chicken over Rice with Cucumber Tomato Salad",
          ],
          cuisine_type: "Mediterranean",
          main_ingredients: [
            "Basmati rice",
            "Grilled chicken drumstick",
            "Cucumber",
            "Cherry tomatoes",
            "Red onion",
            "Bell pepper",
            "Olive oil",
          ],
          calories: 650,
          is_vegetarian: false,
          image_url: "https://example.com/images/mediterranean-chicken.jpg",
        },
        {
          id: "food_002",
          dish_name: "Paneer Butter Masala with Naan",
          alternative_names: [
            "Butter Paneer",
            "Cottage Cheese Curry with Flatbread",
          ],
          cuisine_type: "Indian",
          main_ingredients: [
            "Paneer cubes",
            "Butter",
            "Tomato puree",
            "Heavy cream",
            "Garlic naan",
            "Garam masala",
          ],
          calories: 780,
          is_vegetarian: true,
          image_url: "https://example.com/images/paneer-butter-masala.jpg",
        },
        {
          id: "food_003",
          dish_name: "Classic Beef Burger",
          alternative_names: ["Cheeseburger", "Quarter Pounder with Cheese"],
          cuisine_type: "American",
          main_ingredients: [
            "Ground beef patty",
            "Brioche bun",
            "Cheddar cheese",
            "Lettuce",
            "Pickles",
            "Mustard and Ketchup",
          ],
          calories: 850,
          is_vegetarian: false,
          image_url: "https://example.com/images/beef-burger.jpg",
        },
        {
          id: "food_004",
          dish_name: "Spaghetti Carbonara",
          alternative_names: ["Pasta Carbonara", "Creamy Italian Egg Pasta"],
          cuisine_type: "Italian",
          main_ingredients: [
            "Spaghetti",
            "Pancetta or Bacon",
            "Egg yolks",
            "Pecorino Romano cheese",
            "Black pepper",
          ],
          calories: 590,
          is_vegetarian: false,
          image_url: "https://example.com/images/spaghetti-carbonara.jpg",
        },
        {
          id: "food_005",
          dish_name: "Chicken Teriyaki Stir-fry",
          alternative_names: [
            "Teriyaki Chicken Bowl",
            "Japanese Chicken and Broccoli",
          ],
          cuisine_type: "Japanese",
          main_ingredients: [
            "Chicken breast strips",
            "Teriyaki sauce",
            "Broccoli",
            "Carrots",
            "Soy sauce",
            "Sesame seeds",
          ],
          calories: 420,
          is_vegetarian: false,
          image_url: "https://example.com/images/chicken-teriyaki.jpg",
        },
        {
          id: "food_006",
          dish_name: "Avocado Toast with Poached Egg",
          alternative_names: ["Healthy Breakfast Toast", "Guacamole Sourdough"],
          cuisine_type: "Modern Australian",
          main_ingredients: [
            "Sourdough bread",
            "Ripe avocado",
            "Poached egg",
            "Chili flakes",
            "Lemon juice",
          ],
          calories: 350,
          is_vegetarian: true,
          image_url: "https://example.com/images/avocado-toast.jpg",
        },
        {
          id: "food_007",
          dish_name: "Shrimp Pad Thai",
          alternative_names: ["Thai Stir-fried Noodles", "Shrimp Rice Noodles"],
          cuisine_type: "Thai",
          main_ingredients: [
            "Rice noodles",
            "Fresh shrimp",
            "Bean sprouts",
            "Tamarind paste",
            "Crushed peanuts",
            "Lime",
          ],
          calories: 510,
          is_vegetarian: false,
          image_url: "https://example.com/images/shrimp-pad-thai.jpg",
        },
        {
          id: "food_008",
          dish_name: "Quinoa Buddha Bowl",
          alternative_names: ["Vegan Power Bowl", "Roasted Veggie Quinoa"],
          cuisine_type: "Healthy Fusion",
          main_ingredients: [
            "Quinoa",
            "Roasted chickpeas",
            "Sweet potato",
            "Kale",
            "Tahini dressing",
          ],
          calories: 480,
          is_vegetarian: true,
          image_url: "https://example.com/images/quinoa-bowl.jpg",
        },
        {
          id: "food_009",
          dish_name: "Beef Tacos",
          alternative_names: ["Mexican Street Tacos", "Soft Shell Beef Tacos"],
          cuisine_type: "Mexican",
          main_ingredients: [
            "Corn tortillas",
            "Seasoned ground beef",
            "Cilantro",
            "White onion",
            "Salsa roja",
            "Lime wedges",
          ],
          calories: 440,
          is_vegetarian: false,
          image_url: "https://example.com/images/beef-tacos.jpg",
        },
        {
          id: "food_010",
          dish_name: "Lentil Soup (Dal)",
          alternative_names: ["Yellow Dal Tadka", "Red Lentil Stew"],
          cuisine_type: "Indian",
          main_ingredients: [
            "Red lentils",
            "Turmeric",
            "Cumin seeds",
            "Garlic",
            "Ginger",
            "Fresh coriander",
          ],
          calories: 280,
          is_vegetarian: true,
          image_url: "https://example.com/images/lentil-soup.jpg",
        },
      ],
    ]);
    setLoading(false);
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  const handleSearch = () => {
    const expectedFood = foods.filter((food) =>
      food.dish_name.includes(searchingInpt),
    );
    console.log("Expected Foood: ", expectedFood);
  };

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Discover Delicious Foods
        </h1>
      </div>

      {/* search & Filter Bar */}
      <div className="container mx-auto flex flex-col md:flex-row gap-4 mb-10 sticky top-4 z-10 bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-800">
        {/* search input */}
        <div className="md:flex-1">
          <input
            type="text"
            value={searchingInpt}
            onChange={(e) => setSearchingInput(e.target.value)}
            placeholder="Search foods...(e.g. burger, pizza)"
            className="w-full px-5 py-3 bg-zinc-100 dark:bg-zinc-800 border border-transparent focus:border-orange-500 rounded-xl outline-none text-lg placeholder:text-zinc-400"
          ></input>
        </div>

        {/* Search Button */}
        <div className="md:flex-1">
          <button
            onClick={handleSearch}
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 disabled:opacity-500 text-white rounded-xl font-medium transition"
          >
            Search
          </button>
        </div>

        {/* Category Select (insert API call) */}
        <div>
          <select className="px-5 py-3 bg-zinc-100 dark:bg-zinc-800 border border-transparent focus:border-orange-500 rounded-xl outline-none text-lg">
            <option value="">All Categories</option>
            <option value="burger">Burger</option>
            <option value="pizza">Pizza</option>
            <option value="dessert">Dessert</option>
            <option value="beverage">Beverage</option>
            <option value="rice">Rice</option>
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="container mx-auto">
        {loading ? (
          <div className="flex justify-center py-20">
            <p className="text-xl text-zinc-500">Laoding delicious foods...</p>
          </div>
        ) : foods.length === 0 ? (
          <NoFood />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {foods.map((food) => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodsCC;
