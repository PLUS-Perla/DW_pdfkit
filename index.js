const { createInvoice } = require("./createInvoice.js");

const invoice = {
  shipping: {
    name: "Juana Maria Perla",
    address: "Lomas del Pedregal ",
    city: "San Luis de la Paz",
    state: "Guanajuato",
    country: "México",
    postal_code: 94111
  },
  items: [
    {
      item: "Pago de inscripción",
      description: "Pago de ficha cuatrimestral",
      quantity: 2,
      amount: 6000
    },
    {
      item: "Pago de examen",
      description: "Pago de ficha de examen de recuperación 2",
      quantity: 1,
      amount: 2000
    }
  ],
  subtotal: 8000,
  paid: 0,
  invoice_nr: 1234
};

createInvoice(invoice, "facturaUTNG.pdf");