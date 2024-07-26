import React, { useState } from 'react';
import axios from 'axios';

const BillGenerator = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [email, setEmail] = useState('');
  const [invoiceUrl, setInvoiceUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/create-invoice', {
        productName,
        productPrice,
        quantity,
        email,
      });
      setInvoiceUrl(response.data.invoiceUrl);
    } catch (error) {
      console.error('Error creating invoice:', error);
    }
  };

  const handleDownload = async () => {
    try {
      const response = await axios.get(invoiceUrl, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'invoice.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error downloading invoice:', error);
    }
  };

  return (
    <div className="bill-generator-container">
      <form onSubmit={handleSubmit}  className="bill-generator-form">
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Generate Invoice</button>
      </form>
      {invoiceUrl && (
        <div>
          <a href={invoiceUrl} target="_blank" rel="noopener noreferrer">
            Pay Invoice
          </a>
          <button onClick={handleDownload}>Download Invoice</button>
        </div>
      )}
    </div>
  );
};

export default BillGenerator;