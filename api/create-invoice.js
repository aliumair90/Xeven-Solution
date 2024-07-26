const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { productName, productPrice, quantity, email } = req.body;

  try {

    const product = await stripe.products.create({ name: productName });
    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: productPrice * 100,
      currency: 'usd',
    });

    const customer = await stripe.customers.create({ email });
    const invoiceItem = await stripe.invoiceItems.create({
      customer: customer.id,
      price: price.id,
      quantity,
    });

    const invoice = await stripe.invoices.create({
      customer: customer.id,
      collection_method: 'send_invoice',
      days_until_due: 30,
    });
    await stripe.invoices.finalizeInvoice(invoice.id);
    await stripe.invoices.sendInvoice(invoice.id);

    res.status(200).json({ invoiceUrl: invoice.hosted_invoice_url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};