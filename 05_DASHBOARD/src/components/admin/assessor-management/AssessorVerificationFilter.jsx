function AssessorVerificationFilter({
  value,
  onChange,
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded-xl px-4 py-3 min-w-[180px]"
    >
      <option value="All">
        Verification: All
      </option>

      <option value="Verified">
        Verified
      </option>

      <option value="Not Verified">
        Not Verified
      </option>
    </select>
  );
}

export default AssessorVerificationFilter;