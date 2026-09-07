function FoodItem({ food, addToCart }) {
  return (
    <div className="food-card">
      <img
        src={food.image}
        alt={food.name}
      />

      <h3>{food.name}</h3>

      <p>Category: {food.category}</p>

      <p>Price: ₹{food.price}</p>

      <button onClick={() => addToCart(food)}>
        Add to Cart
      </button>
    </div>
  );
}

export default FoodItem;