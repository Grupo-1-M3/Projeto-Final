import { CartProvider } from "./Cart";
import { ProductsProvider } from "./Products";
import { UserProvider } from "./User";

function Providers({ children }) {
  return (
    <>
      <ProductsProvider>
        <UserProvider>
          <CartProvider>{children}</CartProvider>
        </UserProvider>
      </ProductsProvider>
    </>
  );
}

export default Providers;
