const results = document.querySelector(".results");
const fetchData = async () => {
  try {
    results.innerHTML = "<h1>Loading... </h1>";
    const response = await fetch("/api/3-airtable");
    const data = await response.json();
    console.log(data);
    results.innerHTML = "";
    displayData(data);
  } catch (err) {
    console.log(err);
  }
};
fetchData();
function displayData(data) {
  const items = data
    .map((item) => {
      const { id, Name: name, url, price } = item;
      return `<a href="product.html?id=${id}" class="item">
            <img src="${url}"/>
            <div class="item-desc">
                <p>${name} </p>
                <p class="price">${price} </p>
            </div>
        </a>`;
    })
    .join("");
  results.innerHTML = items;
}
