function Cart({ cart, increaseQuantity, decreaseQuantity }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section id="cart">
      <h2>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty. Add some delicious food! 🍕</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div>
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
              </div>

              <div className="quantity">
                <button onClick={() => decreaseQuantity(item.id)}>
                  −
                </button>

                <span>{item.quantity}</span>

                <button onClick={() => increaseQuantity(item.id)}>
                  +
                </button>
              </div>
            </div>
          ))}

          <h3 className="total">
            Total: ₹{total}
          </h3>

          <button
            className="checkout"
            onClick={() => alert("Order placed successfully! 🎉")}
          >
            Checkout
          </button>
        </div>
      )}
    </section>
  );
}

export default Cart;