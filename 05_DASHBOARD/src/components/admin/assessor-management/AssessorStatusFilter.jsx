function AssessorStatusFilter({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded-xl px-4 py-3 min-w-[180px]"
    >
      <option value="All">Status: All</option>
      <option value="Active">Active</option>
      <option value="Inactive">Inactive</option>
    </select>
  );
}

export default AssessorStatusFilter;