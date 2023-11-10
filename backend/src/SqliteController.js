const db = require("../src/db");

const NEW_ORDER_COLUMNS = [
  "id",
  "billing_first_name",
  "billing_last_name",
  "billing_phone",
  "billing_email",
  "billing_same_as_shipping",
  "shipping_first_name",
  "shipping_last_name",
  "shipping_phone",
  "shipping_email",
  "order_total",
];

const SqliteController = {
  getAllOrders() {
    return new Promise((resolve) => {
      db.all("SELECT id FROM orders", (error, rows = []) => {
        if (error)
          resolve({
            data: null,
            error: error.message,
            success: false,
          });

        resolve({
          data: rows,
          success: true,
        });
      });
    });
  },
  getOrderById(id) {
    return new Promise((resolve) => {
      db.get("SELECT * FROM orders WHERE id = ?", [id], (error, row = null) => {
        if (error)
          resolve({
            data: null,
            error: error.message,
            success: false,
          });

        resolve({
          data: row,
          success: true,
        });
      });
    });
  },
  createOrder({
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
  }) {
    const values = {
      id,
      billing_first_name: billingFirstName,
      billing_last_name: billingLastName,
      billing_phone: billingPhone.replaceAll(/[^0-9]/g, ""),
      billing_email: billingEmail,
      billing_same_as_shipping: !!billingSameAsShipping ? 1 : 0,
      shipping_first_name: !!billingSameAsShipping ? null : shippingFirstName,
      shipping_last_name: !!billingSameAsShipping ? null : shippingLastName,
      shipping_phone: !!billingSameAsShipping
        ? null
        : shippingPhone.replaceAll(/[^0-9]/g, ""),
      shipping_email: !!billingSameAsShipping ? null : shippingEmail,
      order_total: orderTotal,
    };
    const valuesString = Object.values(values).map((value) => `"${value}"`);

    return new Promise((resolve) => {
      db.run(
        `INSERT INTO orders (${NEW_ORDER_COLUMNS.join(
          ", "
        )}) VALUES (${valuesString.join(", ")})`,
        function (error) {
          if (error)
            resolve({
              data: null,
              error: error.message,
              success: false,
            });

          resolve({
            data: {
              orderId: id,
            },
            success: true,
          });
        }
      );
    });
  },
};

module.exports = SqliteController;
