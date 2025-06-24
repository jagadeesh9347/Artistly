import Table from "@/components/Table";

const mockDashboardData = [
  {
    id: 1,
    name: "Aarav Kapoor",
    category: ["Singer", "Speaker"],
    location: "Mumbai",
    feeRange: "₹20K - ₹50K",
  },
  {
    id: 2,
    name: "Sneha Rao",
    category: ["Dancer"],
    location: "Bangalore",
    feeRange: "₹10K - ₹25K",
  },
];

export default function DashboardPage() {
  return (
    <section className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">🎯 Manager Dashboard</h2>
      <Table data={mockDashboardData} />
    </section>
  );
}
