function BasicInformationForm({
  fullName,
  setFullName,
  email,
  setEmail,
  contactNumber,
  setContactNumber,
  isValidEmail,
  isNameCompleted,
  onCancel,
  onNext,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.20)] p-5 w-full max-w-[820px]">
      <h2 className="text-3xl font-bold mb-2">
        Step 1: Basic Information
      </h2>

      <p className="text-gray-600 mb-6">
        Choose the assessor information.
      </p>

      {/* FULL NAME */}
      <div className="mb-5">
        <label className="block font-semibold mb-2">
          Full Name *
        </label>

        <input
          type="text"
          value={fullName}
          onChange={(e) =>
            setFullName(e.target.value)
          }
          placeholder="John A. Doe"
          className="
            w-full
            border
            rounded-lg
            px-4
            py-3
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />
      </div>

      {/* EMAIL */}
      <div className="mb-5">
        <label className="block font-semibold mb-2">
          Email Address *
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          placeholder="jdoe@tesda.edu.ph"
          className={`
            w-full
            border
            rounded-lg
            px-4
            py-3
            focus:outline-none
            focus:ring-2
            ${
              email.length > 0 &&
              !isValidEmail
                ? "border-red-500 focus:ring-red-500"
                : "focus:ring-blue-500"
            }
          `}
        />

        {email.length > 0 &&
          !isValidEmail && (
            <p className="text-red-600 text-sm mt-2">
              ⚠ Invalid email format
            </p>
          )}
      </div>

      {/* CONTACT NUMBER */}
      <div className="mb-5">
        <label className="block font-semibold mb-2">
          Contact Number (Optional)
        </label>

        <input
          type="text"
          value={contactNumber}
          onChange={(e) =>
            setContactNumber(
              e.target.value
            )
          }
          placeholder="09123456789"
          className="
            w-full
            border
            rounded-lg
            px-4
            py-3
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />
      </div>

      {/* BUTTONS */}
      <div className="flex justify-end gap-3">

        <button
          onClick={onCancel}
          className="
            px-6
            py-2
            border
            rounded-lg
            hover:bg-gray-100
          "
        >
          Cancel
        </button>

        <button
          onClick={onNext}
          disabled={
            !isNameCompleted ||
            !isValidEmail
          }
          className={`
            px-6
            py-2
            rounded-lg
            text-white
            ${
              isNameCompleted &&
              isValidEmail
                ? "bg-blue-700 hover:bg-blue-800"
                : "bg-gray-400 cursor-not-allowed"
            }
          `}
        >
          Next
        </button>

      </div>

    </div>
  );
}

export default BasicInformationForm;