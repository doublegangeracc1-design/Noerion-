function AddAssessorStepper() {
  return (
    <div className="mb-5 mx-auto flex w-full max-w-[1200px] overflow-hidden border border-gray-400 rounded-md shadow-[0_12px_32px_rgba(0,0,0,0.15)]">
      {/* Step 1 */}
      <div
        className="
          relative
          flex-1
          bg-[#001F5B]
          text-white
          text-center
          py-3
          font-semibold
          border-r
          border-gray-400
        "
      >
        Step 1: Basic Information

        {/* Arrow border */}
        <div
          className="
            absolute
            top-[-1px]
            right-[-42px]
            w-0
            h-0
            border-t-[25px]
            border-b-[25px]
            border-l-[42px]
            border-t-transparent
            border-b-transparent
            border-l-gray-400
            z-20
          "
        />

        {/* Arrow fill */}
        <div
          className="
            absolute
            top-0
            right-[-40px]
            w-0
            h-0
            border-t-[24px]
            border-b-[24px]
            border-l-[40px]
            border-t-transparent
            border-b-transparent
            border-l-[#001F5B]
            z-30
          "
        />
      </div>

      {/* Step 2 */}
      <div
        className="
          relative
          flex-1
          bg-white
          text-gray-700
          text-center
          py-3
          font-semibold
          border-r
          border-gray-400
        "
      >
        Step 2: Account Set Up

        {/* Arrow border */}
        <div
          className="
            absolute
            top-[-1px]
            right-[-42px]
            w-0
            h-0
            border-t-[25px]
            border-b-[25px]
            border-l-[42px]
            border-t-transparent
            border-b-transparent
            border-l-gray-400
            z-20
          "
        />

        {/* Arrow fill */}
        <div
          className="
            absolute
            top-0
            right-[-40px]
            w-0
            h-0
            border-t-[24px]
            border-b-[24px]
            border-l-[40px]
            border-t-transparent
            border-b-transparent
            border-l-white
            z-30
          "
        />
      </div>

      {/* Step 3 */}
      <div
        className="
          flex-1
          bg-white
          text-gray-700
          text-center
          py-3
          font-semibold
        "
      >
        Step 3: Review & Confirm
      </div>
    </div>
  );
}

export default AddAssessorStepper;