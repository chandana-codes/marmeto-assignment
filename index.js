const newEdition = document.getElementById("newEdition");
const shirtAndHoodie = document.getElementById("shirtAndHoodieSection");

const apiUrl = "https://products-api-2ttf.onrender.com/api/products";

const fetchProducts = async () => {
  const response = await fetch(apiUrl);
  const products = await response.json();
  // console.log(products);
  return products;
};
const productsPromise = fetchProducts();
productsPromise.then((products) => {
  console.log(products);
  const [latestEdition, ...otherProducts] = products;
  renderNewEdition(latestEdition);
  renderOtherProducts(otherProducts);
});

const renderNewEdition = (latestEdition) => {
  const { id, image, title } = latestEdition;
  const latestEditionContainer = document.createElement("div");
  const imageContainer = document.createElement("img");
  const titleContainer = document.createElement("h1");
  imageContainer.src = image;
  titleContainer.textContent = title;

  latestEditionContainer.appendChild(imageContainer);
  latestEditionContainer.appendChild(titleContainer);
  newEdition.appendChild(latestEditionContainer);
};
const renderOtherProducts = (otherProducts) => {
  otherProducts.map((eachProduct) => {
    const { id, image, title } = eachProduct;
    const latestEditionContainer = document.createElement("div");
    const imageContainer = document.createElement("img");
    const titleContainer = document.createElement("h1");
    titleContainer.textContent = title;
    imageContainer.src = image;
    latestEditionContainer.appendChild(titleContainer);
    latestEditionContainer.appendChild(imageContainer);
    shirtAndHoodie.appendChild(latestEditionContainer);
  });
};
