import React, { useState, useEffect } from "react";
import Navbar from "../components/ Navbar";

export default function Sales() {
  const [form, setForm] = useState({
    customer: "",
    invoiceDate: "",
    paymentTerms: "",
    journal: "Sales",
    items: [{ product: "", account: "", quantity: 0, price: 0 }],
  });

  const handleItemChange = (index, field, value) => {
    const updated = [...form.items];
    updated[index][field] =
      field === "quantity" || field === "price" ? parseFloat(value) : value;
    setForm({ ...form, items: updated });
  };

  const addItem = () => {
    setForm({
      ...form,
      items: [
        ...form.items,
        { product: "", account: "", quantity: 0, price: 0 },
      ],
    });
  };

  const totalAmount = form.items.reduce(
    (sum, i) => sum + i.quantity * i.price,
    0
  );

  /* fetch data from account */
  const [accounts, setAccounts] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/accounts") // Replace with your actual endpoint
      .then((res) => res.json())
      .then((data) => setAccounts(data))
      .catch((err) => console.error("Failed to fetch accounts", err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
              <h2 className="text-2xl font-bold text-white">New Invoice</h2>
              <p className="text-blue-100 mt-1">Create a new sales invoice</p>
            </div>

            <div className="p-8">
              {/* Form Fields */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Customer Name
                    </label>
                    <input
                      type="text"
                      value={form.customer}
                      onChange={(e) =>
                        setForm({ ...form, customer: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 hover:bg-white"
                      placeholder="Enter customer name"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Invoice Date
                    </label>
                    <input
                      type="date"
                      value={form.invoiceDate}
                      onChange={(e) =>
                        setForm({ ...form, invoiceDate: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 hover:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Payment Terms
                    </label>
                    <select
                      value={form.paymentTerms}
                      onChange={(e) =>
                        setForm({ ...form, paymentTerms: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 hover:bg-white"
                    >
                      <option value="">Select payment terms</option>
                      <option value="Cash">Cash</option>
                      <option value="15 days">15 days</option>
                      <option value="30 days">30 days</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Journal
                    </label>
                    <input
                      type="text"
                      value={form.journal}
                      readOnly
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>

              {/* Items Table */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Invoice Items
                </h3>
                <div className="overflow-x-auto">
                  <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5 rounded-lg">
                      <table className="min-w-full divide-y divide-gray-300">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                              Product
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                              Account
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                              Quantity
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                                Tax
                              </th>
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                              Price
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                              Amount
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {form.items.map((item, index) => (
                            <tr
                              key={index}
                              className="hover:bg-gray-50 transition-colors duration-150"
                            >
                              <td className="px-6 py-4">
                                <input
                                  value={item.product}
                                  onChange={(e) =>
                                    handleItemChange(
                                      index,
                                      "product",
                                      e.target.value
                                    )
                                  }
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                                  placeholder="Product name"
                                />
                              </td>
                              <td className="px-6 py-4">
                                <select
                                  value={item.account}
                                  onChange={(e) =>
                                    handleItemChange(
                                      index,
                                      "account",
                                      e.target.value
                                    )
                                  }
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                                >
                                  <option value="">Select Account</option>
                                  {accounts.map((acc, idx) => (
                                    <option key={idx} value={acc}>
                                      {acc}
                                    </option>
                                  ))}
                                </select>
                              </td>
                              <td className="px-6 py-4">
                                <input
                                  type="number"
                                  value={item.quantity}
                                  onChange={(e) =>
                                    handleItemChange(
                                      index,
                                      "quantity",
                                      e.target.value
                                    )
                                  }
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                                  placeholder="0"
                                  min="0"
                                />
                              </td>
                              <td className="px-6 py-4">
                                <select
                                  value={item.account}
                                  onChange={(e) =>
                                    handleItemChange(
                                      index,
                                      "account",
                                      e.target.value
                                    )
                                  }
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                                >
                                  <option value="">Select Account</option>
                                  <option value="">VAT 18%</option>
                                  <option value="">N</option>
                                </select>
                              </td>
                              <td className="px-6 py-4">
                                <input
                                  type="number"
                                  value={item.price}
                                  onChange={(e) =>
                                    handleItemChange(
                                      index,
                                      "price",
                                      e.target.value
                                    )
                                  }
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                                  placeholder="0.00"
                                  min="0"
                                  step="0.01"
                                />
                              </td>
                              <td className="px-6 py-4">
                                <div className="text-sm font-medium text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
                                  ${(item.quantity * item.price).toFixed(2)}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <button
                  onClick={addItem}
                  className="mt-4 inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Add Line
                </button>
              </div>

              {/* Total and Actions */}
              <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-gray-200">
                <div className="mb-4 sm:mb-0">
                  <div className="text-2xl font-bold text-gray-900">
                    Total:{" "}
                    <span className="text-blue-600">
                      ${totalAmount.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md">
                    Cancel
                  </button>
                  <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md">
                    Confirm Invoice
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
