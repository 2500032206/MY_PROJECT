# Harvest & Home

## Problem statement

Farmers often depend on multiple middlemen to sell their produce, while buyers have limited visibility into product sources and fair prices. Harvest & Home is a farmer-friendly marketplace that lets growers list produce directly and lets buyers browse, order, and track purchases.

## Modules

- **User (buyer) module:** Create an account, browse and search produce by category, save products to a personal wishlist, add products to a basket or use Order now, place orders, and manage new orders on the separate My orders page.
- **Admin (farmer) module:** Create an account, list and remove produce, see incoming buyer orders, and update order status.
- **Marketplace Admin module:** Sign in to see marketplace-wide active listings, registered account totals, and all orders placed by buyers.
- **Home page:** Introduces the marketplace and links to the separate buyer and farmer sign-in pages.
- **Location-based pricing:** Choose Guntur, Vijayawada, or Tenali from the header. Each listing has separate prices for all three markets, and the selected city is reflected in the catalog, basket, and new orders.
- **Farmer product management:** Farmers can add or edit stock and prices for each market, and upload a product image.

## Technology and storage

The application uses plain HTML, CSS (Grid and Flexbox), and JavaScript. Accounts, listings, baskets, and orders are stored in the browser's Local Storage. The buyer and farmer pages must be opened on the same origin and in the same browser for their data to be shared. This is a local demonstration; Local Storage authentication is not suitable for real customer data or production security.

Demo farmer sign-in: `sai@gamil.com` / `123456`. This account is initialized in the browser on first load with sample produce listings.

Demo marketplace admin sign-in: `admin@harvesthome.com` / `admin123`.

## Run locally

Open a terminal in this folder and run:

```powershell
python -m http.server 5173
```

Then visit <http://localhost:5173>. A static server keeps every page on the same origin so Local Storage works across role pages. No package installation or backend is required.

## GitHub Pages

The `main` branch workflow publishes this static site to <https://2500032206.github.io/MY_PROJECT/> after each push.

## Review demonstration

1. Open the home page and show the separate buyer and farmer entry points.
2. Create a buyer account, add produce to the basket, and place an order.
3. Sign out, open the farmer portal, and create a farmer account.
4. Show the incoming order and change its status.
5. Sign out, return to the buyer account, and show the updated order on the separate My orders page.
6. Add produce from the farmer dashboard and find it in the buyer market.

The starter market includes vegetables, fruits, pulses, grains, dairy, and spices, with produce-specific product photos. Farmer listings automatically use a matching photo for recognized produce names, without requiring an image URL. Search and category filters narrow the catalog.
Dry fruits and other agricultural products are also included. Existing stored listings are upgraded with three distinct city prices the next time the application loads; tomato and potato sample prices match the requested examples.