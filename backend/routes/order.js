const { Router } = require("express");
const {
  createOrder,
  getAllOrders,
  getOrderById,
} = require("../src/SqliteController");
const { v4: uuidv4 } = require("uuid");

const router = Router();

const API_KEY =
  "LDWBdTP6Vudo6AvDp3ELgEgXD1N74eRzhwftn1Q7VHCzArEmbDJjqiOZGi8Kng1I06J2oRirMccMPtmgEl2m1yJnFLnECfOexKaSH2sPcStv0TT4beRGvJwy3ACMeCM8";
const INVALID_REQUEST_RESPONSE = {
  data: null,
  error: "Invalid request",
  success: false,
};

router.post("/api/v1/getAllOrders", async function (req, res) {
  const { apiKey } = req.body;

  if (apiKey !== API_KEY) return res.send(INVALID_REQUEST_RESPONSE);

  const { data, error, success } = await getAllOrders();

  return res.send({
    data,
    error,
    success,
  });
});

router.post("/api/v1/getOrder", async function (req, res) {
  const { apiKey, orderId } = req.body;

  if (apiKey !== API_KEY) return res.send(INVALID_REQUEST_RESPONSE);

  const { data, error, success } = await getOrderById(orderId);

  return res.send({
    data,
    error,
    success,
  });
});

router.post("/api/v1/createOrder", async function (req, res) {
  const {
    apiKey,
    billingFirstName,
    billingLastName,
    billingPhone,
    billingEmail,
    billingSameAsShipping,
    shippingFirstName,
    shippingLastName,
    shippingPhone,
    shippingEmail,
  } = req.body;

  if (apiKey !== API_KEY) return res.send(INVALID_REQUEST_RESPONSE);

  const id = uuidv4();
  const orderTotal = +(Math.random() * 100).toFixed(2);
  const { data, error, success } = await createOrder({
    id,
    billingFirstName,
    billingLastName,
    billingPhone,
    billingEmail,
    billingSameAsShipping,
    shippingFirstName,
    shippingLastName,
    shippingPhone,
    shippingEmail,
    orderTotal,
  });

  return res.send({
    data,
    error,
    success,
  });
});

module.exports = router;
