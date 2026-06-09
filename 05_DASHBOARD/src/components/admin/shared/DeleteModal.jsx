/*
|--------------------------------------------------------------------------
| REUSABLE DELETE MODAL
|--------------------------------------------------------------------------
|
| Purpose:
| Confirmation modal before deletion.
|
| Reusable For:
| - Assessors
| - Trainees
| - Users
| - Certificates
|
|--------------------------------------------------------------------------
*/

function DeleteModal({
  isOpen,
  onClose,
  onConfirm,
  title,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg">

        <h2 className="text-lg font-semibold text-center mb-6">
          {title}
        </h2>

        <div className="flex justify-center gap-4">

          <button
            onClick={onConfirm}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Yes
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            No
          </button>

        </div>

      </div>

    </div>
  );
}

export default DeleteModal;