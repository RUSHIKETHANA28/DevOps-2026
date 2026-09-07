function RestaurantList({
  restaurants,
  selectedRestaurant,
  setSelectedRestaurant
}) {
  return (
    <section id="restaurants">
      <h2>🍽️ Restaurants</h2>

      <div>
        {restaurants.map((restaurant) => (
          <button
            key={restaurant.id}
            onClick={() => setSelectedRestaurant(restaurant.id)}
          >
            {restaurant.name}
          </button>
        ))}
      </div>
    </section>
  );
}

export default RestaurantList;