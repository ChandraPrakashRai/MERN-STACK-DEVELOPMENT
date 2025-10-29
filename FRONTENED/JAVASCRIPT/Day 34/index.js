// Simple Food Order Simulation using async/await

const orderDetail = {
  orderId: 123123,
  food: ["Pizza", "Biryani", "Coke"],
  cost: 620,
  customer_name: "Rohit",
  customer_location: "Dwarka",
  restaurant_location: "Delhi"
};

// Utility function to simulate a delay
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Step 1: Place order
async function placedOrder(order) {
  console.log(`💳 Payment of ₹${order.cost} is in progress...`);
  await wait(2000);

  if (Math.random() > 0.1) {
    console.log("✅ Payment received! Order placed successfully.");
    order.status = true;
    return order;
  } else {
    throw new Error("❌ Payment failed. Please try again.");
  }
}

// Step 2: Prepare order
async function preparingOrder(order) {
  console.log(`👨‍🍳 Preparing your food: ${order.food.join(", ")}...`);
  await wait(2000);

  if (Math.random() > 0.05) {
    console.log("🍲 Order is ready!");
    order.token = 123;
    return order;
  } else {
    throw new Error("🚫 Some food items are unavailable at the restaurant.");
  }
}

// Step 3: Pickup order
async function pickupOrder(order) {
  console.log(`🚴 Delivery person is going to the restaurant at ${order.restaurant_location}...`);
  await wait(2000);

  if (Math.random() > 0.05) {
    console.log("📦 Order has been picked up.");
    order.picked = true;
    return order;
  } else {
    throw new Error("🛑 Delivery person couldn't reach the restaurant.");
  }
}

// Step 4: Deliver order
async function deliverOrder(order) {
  console.log(`🚚 Delivering your order to ${order.customer_location}...`);
  await wait(2000);

  console.log("🎉 Order delivered successfully!");
  order.delivered = true;
  return order;
}

// Main async function
async function runOrderFlow() {
  try {
    let order = await placedOrder(orderDetail);
    order = await preparingOrder(order);
    order = await pickupOrder(order);
    order = await deliverOrder(order);

    console.log("\n✅ Final Order Details:");
    console.log(order);
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log("🧹 Cleanup completed. Thank you for ordering!");
  }
}

// Run the simulation
runOrderFlow();
