# The project

This is a simple REST API that handles mock orders, built with Express and
SQLite.

## Running the project

Run the project by navigating into the project's root folder and entering
`npm run start` or `yarn start` in your terminal. By default, the server runs on
port 1337. This can be customized by setting the `PORT` environment variable

e.g. `PORT=8000 yarn start`

## Database

The project reads from the `database.db` SQLite database file located in the root
directory. If you need to reset the database, delete `database.db` and restart
the server.

## Endpoints

The endpoints all require a valid `apiKey` property in the request.

The API key is: `LDWBdTP6Vudo6AvDp3ELgEgXD1N74eRzhwftn1Q7VHCzArEmbDJjqiOZGi8Kng1I06J2oRirMccMPtmgEl2m1yJnFLnECfOexKaSH2sPcStv0TT4beRGvJwy3ACMeCM8`

### /api/v1/getOrder

Returns the order associated with the specific order ID.

#### Request

Method: `POST`

```json
{
  "apiKey": string,
  "orderId": string
}
```

#### Response

```json
{
  "data": {
    "id": string,
    "billing_first_name": string,
    "billing_last_name": string,
    "billing_phone": number,
    "billing_email": string,
    "billing_same_as_shipping": 1 | 0,
    "shipping_first_name": string | null,
    "shipping_last_name": string | null,
    "shipping_phone": number | null,
    "shipping_email": string | null,
    "order_total": number
  },
  "success": boolean
}
```

### /api/v1/getAllOrders

Returns the order ID of all the orders in the table.

#### Request

Method: `POST`

```json
{
  "apiKey": string,
}
```

#### Response

```json
{
  "data": [
    {
      "id": string,
    }
  ],
  "success": boolean
}
```

### /api/v1/createOrder

Creates a new order with the given information and returns its order ID.

Although the shipping information should be included if `billingSameAsShipping`
is true, no validation for it exists for simplicity's sake.

#### Request

Method: `POST`

```json
{
  "apiKey": string,
  "billingFirstName": string,
  "billingLastName": string,
  "billingPhone": number,
  "billingEmail": string,
  "billingSameAsShipping": boolean,
  "shippingFirstName": string | null | undefined,
  "shippingLastName": string | null | undefined,
  "shippingPhone": string | null | undefined,
  "shippingEmail": string | null | undefined
}
```

#### Response

```json
{
  "data": {
      "orderId": string,
  },
  "success": boolean
}
```
