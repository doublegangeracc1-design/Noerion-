function EditAssessorModal({
  isOpen,
  onClose,
  assessor,
  formData,
  setFormData,
  onUpdate,
}) {
  if (!isOpen || !assessor) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white w-full max-w-xl rounded-3xl p-8 shadow-2xl">

        {/* HEADER */}
        <h2 className="text-2xl font-bold mb-8">
          Edit Assessor
        </h2>

        {/* FULL NAME */}
        <div className="mb-5">
          <label className="block text-sm font-semibold mb-2">
            FULL NAME
          </label>

          <input
            type="text"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({
                ...formData,
                fullName: e.target.value,
              })
            }
            className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* ASSESSOR ID */}
        <div className="mb-5">
          <label className="block text-sm font-semibold mb-2">
            ASSESSOR ID
          </label>

          <input
            type="text"
            value={formData.assessorId}
            onChange={(e) =>
              setFormData({
                ...formData,
                assessorId: e.target.value,
              })
            }
            className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* EMAIL */}
        <div className="mb-8">
          <label className="block text-sm font-semibold mb-2">
            EMAIL
          </label>

          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* BUTTONS */}
        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="px-5 py-3 rounded-xl border border-gray-300 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={onUpdate}
            className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
          >
            Update
          </button>

        </div>

      </div>

    </div>
  );
}

export default EditAssessorModal;