require("dotenv").config();
const Airtable = require("airtable-node");
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.DATABASE_ID)
  .table("headphones");
exports.handler = async (event, context) => {
  try {
    const { records } = await airtable.list();
    const products = records.map((item) => {
      const { id } = item;
      const { Name, images, price, featured, category, colors, company } =
        item.fields;
      const url = images[0].url;
      console.log(featured);
      return {
        id,
        Name,
        url,
        price,
        images,
        featured,
        category,
        colors,
        company,
      };
    });
    return {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: "Something wrong with this data",
    };
  }
};
