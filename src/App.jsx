
import { useState } from "react";

import OfferBar from "./components/OfferBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GiftCollections from "./components/GiftCollections";
import ProductSection from "./components/ProductSection";
import SignatureHampers from "./components/SignatureHampers";
import UnwrappingExperience from "./components/UnwrappingExperience";
import CustomerStories from "./components/CustomerStories";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import WishlistDrawer from "./components/WishlistDrawer";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
 const [selectedCategory, setSelectedCategory] = useState("All Gifts");
const [searchQuery, setSearchQuery] = useState("");
  

const handleCategoryClick = (category) => {
  setSelectedCategory(category);

  document.getElementById("all-gifts")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
  // Add product to cart or increase its quantity
  function handleAddToCart(product) {
    setCartItems((previous) => {
      const existing = previous.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return previous.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previous, { ...product, quantity: 1 }];
    });
  }

  // Remove product from cart
  function handleRemoveItem(id) {
    setCartItems((previous) =>
      previous.filter((item) => item.id !== id)
    );
  }

  // Increase or decrease product quantity
  function handleQuantityChange(id, change) {
    setCartItems((previous) =>
      previous
        .map((item) =>
          item.id === id
            ? {
              ...item,
              quantity: item.quantity + change,
            }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  // Add or remove wishlist item
  function handleToggleWishlist(product) {
    setWishlistItems((previous) => {
      const exists = previous.some(
        (item) => item.id === product.id
      );

      if (exists) {
        return previous.filter(
          (item) => item.id !== product.id
        );
      }

      return [...previous, product];
    });
  }

  // Remove item from wishlist
  function handleRemoveWishlistItem(id) {
    setWishlistItems((previous) =>
      previous.filter((item) => item.id !== id)
    );
  }

  // Calculate total cart quantity
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Calculate total price
  const cartTotal = cartItems.reduce(
    (total, item) =>
      total + Number(item.price) * item.quantity,
    0
  );

  return (
    <>
      {/* Top Offer Bar */}
      <OfferBar />

      {/* Navbar */}
      <Navbar
          onCategoryClick={handleCategoryClick}
  searchQuery={searchQuery}
  onSearchChange={setSearchQuery}
  onCartClick={() => setIsCartOpen(true)}
  onWishlistClick={() => setIsWishlistOpen(true)}
  cartCount={cartCount}

      />

      {/* Homepage Sections */}
      <main>
        <Hero />
        <GiftCollections />

        <ProductSection
          selectedCategory={selectedCategory}
  searchQuery={searchQuery}
  onAddToCart={handleAddToCart}
  wishlistItems={wishlistItems}
  onToggleWishlist={handleToggleWishlist}
        />

        <SignatureHampers />
        <UnwrappingExperience />
        <CustomerStories />
      </main>

      {/* Footer */}
      <Footer />

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveItem}
        onQuantityChange={handleQuantityChange}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        items={wishlistItems}
        onRemoveItem={handleRemoveWishlistItem}
      />
    </>
  );
}

export default App;
