import React, { useEffect, useState } from "react";
import Navbar from "../components/ Navbar";

interface Invoice {
  id: number;
  invoiceNumber: string;
  customerName: string;
  invoiceDate: string;
  dueDate: string;
  status: string;
}

const Invoices = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("/api/invoices") // Replace with your actual API route
      .then((response) => setInvoices(response.data))
      .catch((error) => console.error("Error fetching invoices:", error));
  }, []);

  const filteredInvoices = invoices.filter(
    (invoice) =>
      invoice.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-6">Invoices</h1>

        <input
          type="text"
          placeholder="Search by customer or invoice number"
          className="w-full p-2 mb-6 border border-gray-300 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 border">Invoice #</th>
                <th className="p-3 border">Customer</th>
                <th className="p-3 border">Invoice Date</th>
                <th className="p-3 border">Due Date</th>
                <th className="p-3 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredInvoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-gray-50">
                  <td className="p-3 border">{inv.invoiceNumber}</td>
                  <td className="p-3 border">{inv.customerName}</td>
                  <td className="p-3 border">{inv.invoiceDate}</td>
                  <td className="p-3 border">{inv.dueDate}</td>
                  <td className="p-3 border">{inv.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Invoices;
