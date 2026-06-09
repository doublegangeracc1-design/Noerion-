function VerificationFilter({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded-xl px-6 py-3 min-w-[220px]"
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

      <option value="N/A">
        N/A
      </option>
    </select>
  );
}

export default VerificationFilter;