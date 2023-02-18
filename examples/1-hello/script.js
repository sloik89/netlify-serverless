const results = document.querySelector(".results");
const fetchData = async () => {
  try {
    const response = await fetch("/.netlify/functions/1-hello");
    const data = await response.json();
    console.log(data);
    const { name, id } = data;
    results.innerHTML = `<div>
     <h3>This is response from server</h3>
        <p>${name} </p>
        <p>${id} </p>
      </div>`;
  } catch (err) {
    console.log(err);
  }
};
fetchData();
