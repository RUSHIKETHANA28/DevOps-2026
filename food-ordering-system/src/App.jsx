import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import RestaurantList from "./components/RestaurantList";
import FoodItem from "./components/FoodItem";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  const restaurants = [
    { id: 1, name: "Pizza Palace" },
    { id: 2, name: "Burger Hub" },
    { id: 3, name: "Biryani House" }
  ];

  const foods = [
    {
      id: 1,
      restaurantId: 1,
      name: "Margherita Pizza",
      price: 249,
      category: "Pizza",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500"
    },
    {
      id: 2,
      restaurantId: 1,
      name: "Farmhouse Pizza",
      price: 349,
      category: "Pizza",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500"
    },
    {
      id: 3,
      restaurantId: 2,
      name: "Cheese Burger",
      price: 199,
      category: "Burger",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500"
    },
    {
      id: 4,
      restaurantId: 2,
      name: "Classic Burger",
      price: 179,
      category: "Burger",
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500"
    },
    {
      id: 5,
      restaurantId: 3,
      name: "Chicken Biryani",
      price: 299,
      category: "Biryani",
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500"
    },
    {
      id: 6,
      restaurantId: 3,
      name: "Mutton Biryani",
      price: 399,
      category: "Biryani",
      image:
        "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?w=500"
    }
  ];

  const [selectedRestaurant, setSelectedRestaurant] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  function addToCart(food) {
    const existingItem = cart.find(
      (item) => item.id === food.id
    );

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...food,
          quantity: 1
        }
      ]);
    }
  }

  function increaseQuantity(id) {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decreaseQuantity(id) {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function handleRestaurantChange(id) {
    setSelectedRestaurant(id);
    setSelectedCategory("All");
    setSearch("");
  }

  // Foods belonging to selected restaurant
  const restaurantFoods = foods.filter(
    (food) => food.restaurantId === selectedRestaurant
  );

  // Categories
  const categories = [
    "All",
    ...new Set(
      restaurantFoods.map((food) => food.category)
    )
  ];

  // Apply category + search filter
  const filteredFoods = restaurantFoods.filter((food) => {
    const matchesCategory =
      selectedCategory === "All" ||
      food.category === selectedCategory;

    const matchesSearch =
      food.name.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Restaurants */}
      <RestaurantList
        restaurants={restaurants}
        selectedRestaurant={selectedRestaurant}
        setSelectedRestaurant={handleRestaurantChange}
      />

      {/* Search */}
      <section>
        <h2>🔍 Search Food</h2>

        <input
          type="text"
          placeholder="Search for food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      {/* Category Filter */}
      <section>
        <h2>🔎 Filter by Category</h2>

        <div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Food Items */}
      <section>
        <h2>🍴 Food Items</h2>

        <div>
          {filteredFoods.length === 0 ? (
            <p>No food items found.</p>
          ) : (
            filteredFoods.map((food) => (
              <FoodItem
                key={food.id}
                food={food}
                addToCart={addToCart}
              />
            ))
          )}
        </div>
      </section>

      {/* Cart */}
      <Cart
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;