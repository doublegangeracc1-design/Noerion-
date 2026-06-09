import { useState } from "react";
import StatusBadge from "../shared/StatusBadge";
import DeleteModal from "../shared/DeleteModal";
import EditAssessorModal from "./EditAssessorModal";

function AssessorTable({
  assessors,
  onDeactivate,
  onReactivate,
  onDelete,
  onUpdate,
}) {
  /*
  |--------------------------------------------------------------------------
  | DELETE MODAL STATE
  |--------------------------------------------------------------------------
  */
  const [showDeleteModal, setShowDeleteModal] =
    useState(false);

  /*
  |--------------------------------------------------------------------------
  | EDIT MODAL STATE
  |--------------------------------------------------------------------------
  */
  const [showEditModal, setShowEditModal] =
    useState(false);

  /*
  |--------------------------------------------------------------------------
  | SELECTED ASSESSOR
  |--------------------------------------------------------------------------
  */
  const [selectedAssessor, setSelectedAssessor] =
    useState(null);

  /*
  |--------------------------------------------------------------------------
  | EDIT FORM DATA
  |--------------------------------------------------------------------------
  */
  const [formData, setFormData] = useState({
    fullName: "",
    assessorId: "",
    email: "",
  });

  /*
  |--------------------------------------------------------------------------
  | OPEN DELETE MODAL
  |--------------------------------------------------------------------------
  */
  const handleDeleteClick = (assessor) => {
    setSelectedAssessor(assessor);
    setShowDeleteModal(true);
  };

  /*
  |--------------------------------------------------------------------------
  | OPEN EDIT MODAL
  |--------------------------------------------------------------------------
  */
  const handleEditClick = (assessor) => {
    setSelectedAssessor(assessor);

    setFormData({
      fullName: assessor.fullName,
      assessorId: assessor.assessorId,
      email: assessor.email,
    });

    setShowEditModal(true);
  };

  /*
  |--------------------------------------------------------------------------
  | UPDATE ASSESSOR
  |--------------------------------------------------------------------------
  */
  const handleUpdate = () => {
    onUpdate({
      ...selectedAssessor,
      ...formData,
    });

    setShowEditModal(false);
    setSelectedAssessor(null);
  };

  /*
  |--------------------------------------------------------------------------
  | CONFIRM DELETE
  |--------------------------------------------------------------------------
  */
  const confirmDelete = () => {
    if (selectedAssessor) {
      onDelete(selectedAssessor.id);
    }

    setShowDeleteModal(false);
    setSelectedAssessor(null);
  };

  return (
    <>
      {/* TABLE CONTAINER */}
      <div className="border-2 border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.20)] rounded-xl overflow-hidden">

        {/* SCROLLABLE AREA */}
        <div className="max-h-[350px] overflow-y-auto">

          <table className="w-full min-w-[900px]">

            {/* TABLE HEADER */}
            <thead className="bg-gray-200 sticky top-0 z-10">
              <tr>

                <th className="text-left py-4 px-4">
                  Full Name
                </th>

                <th className="text-left py-4 px-4">
                  Assessor ID
                </th>

                <th className="text-left py-4 px-4">
                  Email
                </th>

                <th className="text-left py-4 px-4">
                  Status
                </th>

                <th className="text-left py-4 px-4">
                  Verification Status
                </th>

                <th className="text-left py-4 px-4">
                  Actions
                </th>

              </tr>
            </thead>

            {/* TABLE BODY */}
            <tbody>
              {assessors.length > 0 ? (
                assessors.map((assessor) => (
                  <tr
                    key={assessor.id}
                    className="border-b border-gray-300 hover:bg-gray-200"
                  >
                    <td className="py-4 px-4">
                      {assessor.fullName}
                    </td>

                    <td className="py-4 px-4">
                      {assessor.assessorId}
                    </td>

                    <td className="py-4 px-4">
                      {assessor.email}
                    </td>

                    {/* STATUS */}
                    <td className="py-4 px-4">
                      <StatusBadge
                        status={assessor.status}
                      />
                    </td>

                    {/* VERIFICATION STATUS */}
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">

                        <span
                          className={`w-3 h-3 rounded-full ${
                            assessor.verificationStatus ===
                            "Verified"
                              ? "bg-blue-500"
                              : "bg-yellow-400"
                          }`}
                        />

                        <span>
                          {
                            assessor.verificationStatus
                          }
                        </span>

                      </div>
                    </td>

                    {/* ACTIONS */}
                    <td className="py-4 px-4">
                      {assessor.verificationStatus ===
                      "Verified" ? (
                        <div className="flex gap-2">

                          <button
                            onClick={() =>
                              handleEditClick(
                                assessor
                              )
                            }
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200"
                          >
                            Edit
                          </button>

                          <button
                            onClick={() =>
                              onDeactivate(
                                assessor.id
                              )
                            }
                            className="px-3 py-1 bg-red-100 text-red-700 rounded-lg hover:bg-red-200"
                          >
                            Deactivate
                          </button>

                        </div>
                      ) : (
                        <div className="flex gap-2">

                          <button
                            onClick={() =>
                              onReactivate(
                                assessor.id
                              )
                            }
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200"
                          >
                            Reactivate
                          </button>

                          <button
                            onClick={() =>
                              handleDeleteClick(
                                assessor
                              )
                            }
                            className="px-3 py-1 bg-red-100 text-red-700 rounded-lg hover:bg-red-200"
                          >
                            Delete
                          </button>

                        </div>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-8 text-gray-500"
                  >
                    No assessors found.
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </div>

      {/* EDIT MODAL */}
      <EditAssessorModal
        isOpen={showEditModal}
        onClose={() => {
          setShowEditModal(false);
          setSelectedAssessor(null);
        }}
        assessor={selectedAssessor}
        formData={formData}
        setFormData={setFormData}
        onUpdate={handleUpdate}
      />

      {/* DELETE MODAL */}
      <DeleteModal
        isOpen={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
          setSelectedAssessor(null);
        }}
        onConfirm={confirmDelete}
        title="Do you want to delete this assessor?"
      />
    </>
  );
}

export default AssessorTable;