import { useState, createContext } from "react";
export const ProductsContext = createContext([]);

const allProducts = [
  {
    category: "Panificadora",
    name: "nome produto 1",
    price: 4.99,
    description: "descrição produto",
    img: "https://exame.com/wp-content/uploads/2020/05/Vinil-Burger.jpg?quality=70&strip=info",
    validity: "01/01/2022",
    userId: 2,
  },
  {
    category: "Panificadora",
    name: "nome produto 2",
    price: 4.99,
    description: "descrição produto",
    img: "https://s2.glbimg.com/wMQRG2vmN_dDJ-1HrSwGOKEbZak=/0x0:1080x608/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2021/e/n/G9IuruRaezxqgmwozOyg/capa-materia-gshow-49-.png",
    validity: "01/01/2022",
    userId: 2,
  },
  {
    category: "Panificadora",
    name: "nome produto 3",
    price: 4.99,
    description: "descrição produto",
    img: "https://www.sabornamesa.com.br/media/k2/items/cache/5031e263a4a258791d6306b2d3d9dbf6_XL.jpg",
    validity: "01/01/2022",
    userId: 2,
  },
  {
    category: "Panificadora",
    name: "nome produto 4",
    price: 4.99,
    description: "descrição produto",
    img: "https://cozinhasimples.com.br/wp-content/uploads/yakisoba-cozinha-simples-780x470.jpg",
    validity: "01/01/2022",
    userId: 2,
  },
];

export const ProductsProvider = ({ children }) => {
  const [products] = useState(allProducts);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
