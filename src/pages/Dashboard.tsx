import React from "react";
import Navbar from "../components/ Navbar";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const data = [
    {
      name: "Jan",
      sales: 4000,
      purchases: 2400,
      expenses: 2400,
    },
    {
      name: "Feb",
      sales: 3000,
      purchases: 1398,
      expenses: 2210,
    },
    {
      name: "Mar",
      sales: 2000,
      purchases: 9800,
      expenses: 2290,
    },
    {
      name: "Apr",
      sales: 2780,
      purchases: 3908,
      expenses: 2000,
    },
    {
      name: "May",
      sales: 1890,
      purchases: 4800,
      expenses: 2181,
    },
    {
      name: "Jun",
      sales: 2390,
      purchases: 3800,
      expenses: 2500,
    },
  ];

  const navigate = useNavigate();

  const cards = [
    {
      title: "Sales",
      amount: "300,000",
      color: "from-blue-500 to-blue-600",
      icon: "📊",
      action: () => navigate("/sales"),
    },
    {
      title: "Purchases",
      amount: "250,000",
      color: "from-green-500 to-green-600",
      icon: "🛒",
      action: () => navigate("/purchases"),
    },
    {
      title: "Expenses",
      amount: "150,000",
      color: "from-orange-500 to-orange-600",
      icon: "💰",
      action: () => console.log("Navigate to expenses"),
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Dashboard Overview
              </h1>
              <p className="text-gray-600">
                Monitor your business performance at a glance
              </p>
            </div>

            {/* Main Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${card.color}`}></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{card.icon}</div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {card.title}
                        </h3>
                      </div>
                      <button
                        onClick={card.action}
                        className={`px-4 py-2 bg-gradient-to-r ${card.color} text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200 shadow-md hover:shadow-lg`}
                      >
                        Add
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 mb-1">Total Amount</p>
                      <p className="text-3xl font-bold text-gray-900">
                        ${card.amount}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {/* Sales Overview Chart */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-800">
                    Sales Overview
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">
                      Monthly Performance
                    </span>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" stroke="#6b7280" fontSize={12} />
                    <YAxis stroke="#6b7280" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #e5e7eb",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <Bar
                      dataKey="sales"
                      fill="#3b82f6"
                      radius={[4, 4, 0, 0]}
                      activeBar={<Rectangle fill="#2563eb" stroke="#1d4ed8" />}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Revenue Breakdown Chart */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-800">
                    Financial Overview
                  </h3>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">Sales</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">Purchases</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">Expenses</span>
                    </div>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" stroke="#6b7280" fontSize={12} />
                    <YAxis stroke="#6b7280" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #e5e7eb",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <Bar
                      dataKey="sales"
                      fill="#3b82f6"
                      radius={[2, 2, 0, 0]}
                      activeBar={<Rectangle fill="#2563eb" stroke="#1d4ed8" />}
                    />
                    <Bar
                      dataKey="purchases"
                      fill="#10b981"
                      radius={[2, 2, 0, 0]}
                      activeBar={<Rectangle fill="#059669" stroke="#047857" />}
                    />
                    <Bar
                      dataKey="expenses"
                      fill="#f97316"
                      radius={[2, 2, 0, 0]}
                      activeBar={<Rectangle fill="#ea580c" stroke="#c2410c" />}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Quick Stats Footer */}
            <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Quick Statistics
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">75%</p>
                  <p className="text-sm text-gray-600">Sales Growth</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">$45K</p>
                  <p className="text-sm text-gray-600">Monthly Revenue</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <p className="text-2xl font-bold text-orange-600">128</p>
                  <p className="text-sm text-gray-600">New Customers</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <p className="text-2xl font-bold text-purple-600">94%</p>
                  <p className="text-sm text-gray-600">Customer Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
