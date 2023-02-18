const results = document.querySelector(".results");
const fetchData = async () => {
  try {
    const response = await fetch("/api/2-basic-api");
    const data = await response.json();
    console.log(data);
    displayData(data);
  } catch (err) {
    console.log(err);
  }
};
fetchData();
function displayData(data) {
  console.log(data);
  const items = data
    .map((item) => {
      const {
        id,
        name,
        image: { url },
        price,
      } = item;
      return `<div class="item">
            <img src="${url}"/>
            <div class="item-desc">
                <p>${name} </p>
                <p class="price">${price} </p>
            </div>
        </div>`;
    })
    .join("");
  results.innerHTML = items;
  console.log(items);
}
