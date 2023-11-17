export const fetchProducts = () => {
  // Simulating an asynchronous action to fetch products from an API
  return (dispatch) => {
    // Fetch products logic here...
    const products = [
      {
        id: 1,
        name: "OPPO A54",
        description: "This is the description of OPPO.",
        image:
          "https://www.reliancedigital.in/medias/Oppo-A54-Smart-Phone-64GB-4GB-RAM-Starry-Blue-491996536-i-5-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzU3NTZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDBiL2g2Ni85NTI4Mzg5MDA5NDM4LmpwZ3w2Yzc2OTczN2I3ZTU3MzQ3NDFmZGI2MGQyMzE0ZTNjZjRkOGY2ODdlODMzN2FmMDExNzIwOWViMzE0NDNlOTgw"
      },
      {
        id: 2,
        name: "NOKIA",
        description: "This is the description of Nokia",
        image:
          "https://images.ctfassets.net/wcfotm6rrl7u/7naqWcJFYK7s4oDF5xZKc5/b5089ca05beaabe1ed89ed016b20417d/nokia_C22-IN-DTC-Hero-devices-mobile.png"
      },
      {
        id: 3,
        name: "SAMSUNG",
        description: "This is the description of Samsung",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAw83BANxgyk_rSg-ucz7GeZsHGy2QbEIg3w&usqp=CAU"
      }
    ];

    dispatch({ type: "FETCH_PRODUCTS", payload: products });
  };
};
