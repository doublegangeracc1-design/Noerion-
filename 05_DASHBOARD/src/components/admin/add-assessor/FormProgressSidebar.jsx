import { Check } from "lucide-react";

function FormProgressSidebar({
  isNameCompleted,
  isValidEmail,
  hasContactNumber,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.20)] p-6 h-fit w-[290px] shrink-0">
      <h3 className="text-xl font-bold mb-4">
        Form Progress
      </h3>

      <p className="font-medium mb-4">
        Step 1 of 3
      </p>

      <div className="space-y-4">

        <div className="flex items-center gap-3">
          {isNameCompleted ? (
            <Check
              size={20}
              className="text-blue-700"
            />
          ) : (
            <div className="w-5 h-5 border rounded" />
          )}

          <span>Name Completed</span>
        </div>

        <div className="flex items-center gap-3">
          {isValidEmail ? (
            <Check
              size={20}
              className="text-blue-700"
            />
          ) : (
            <div className="w-5 h-5 border rounded" />
          )}

          <span>Valid Email</span>
        </div>

        <div className="flex items-center gap-3">
          {hasContactNumber ? (
            <Check
              size={20}
              className="text-blue-700"
            />
          ) : (
            <div className="w-5 h-5 border rounded" />
          )}

          <span>
            Contact Number (Optional)
          </span>
        </div>

      </div>

    </div>
  );
}

export default FormProgressSidebar;

