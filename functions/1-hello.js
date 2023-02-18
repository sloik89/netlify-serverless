// example url /.netlify/functions/1-hello
const data = { name: "seba", id: 214 };
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
