function StatusBadge({ status }) {
  const styles = {
    Active:
      "bg-green-100 text-green-700",

    Inactive:
      "bg-gray-200 text-gray-700",

    Pending:
      "bg-yellow-100 text-yellow-700",

    Approved:
      "bg-green-100 text-green-700",

    Rejected:
      "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${
        styles[status]
      }`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;