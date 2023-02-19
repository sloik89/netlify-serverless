require("dotenv").config();
const Airtable = require("airtable-node");
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.DATABASE_ID)
  .table("headphones");

exports.handler = async (event, context) => {
  console.log(event);
  const { id } = event.queryStringParameters;
  console.log(id);
  if (id) {
    try {
      const product = await airtable.retrieve(id);
      if (product.error) {
        return {
          statusCode: 404,
          body: `No product with id ${id}`,
        };
      }
      return {
        statusCode: 200,
        body: JSON.stringify(product.fields),
      };
    } catch (err) {
      return {
        statusCode: 400,
        body: "There is an error",
      };
    }
    return {
      statusCode: 200,
      body: "Single Product",
    };
  }
  return {
    statusCode: 400,
    body: "Please provide product id",
  };
};
