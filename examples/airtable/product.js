const url = new URLSearchParams(window.location.search);
const id = url.get("id");
const results = document.querySelector(".results");
console.log(id);
const fetchData = async () => {
  try {
    const response = await fetch(`/api/3-product?id=${id}`);
    const data = await response.json();
    console.log(data);
    displayData(data);
  } catch (err) {
    console.log(err);
  }
};
fetchData();
const displayData = (data) => {
  const { Name, colors, company, description, price, images } = data;
  results.innerHTML = `
    <div class="product">
        <img src="${images[0].url}"/>
        <div class="product-desc">
            <p class="product-name"> ${Name} </p>
            <p>${price}$<p/>
            <p>${description} </p>
            <div class="colors">
            ${colors
              .map((color) => {
                return `<span class="color" style=background-color:${color}>  </span>`;
              })
              .join("")}
            </div>
        </div>
    </div>
    `;
  console.log(colors);
};
