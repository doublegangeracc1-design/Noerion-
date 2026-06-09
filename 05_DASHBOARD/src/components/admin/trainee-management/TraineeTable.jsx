import { useState } from "react";
import StatusBadge from "../shared/StatusBadge";
import DeleteModal from "../shared/DeleteModal";

function TraineeTable({
  trainees,
  onApprove,
  onReject,
  onDelete,
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
  | SELECTED TRAINEE
  |--------------------------------------------------------------------------
  */
  const [selectedTrainee, setSelectedTrainee] =
    useState(null);

  /*
  |--------------------------------------------------------------------------
  | OPEN DELETE MODAL
  |--------------------------------------------------------------------------
  */
  const handleDeleteClick = (trainee) => {
    setSelectedTrainee(trainee);
    setShowDeleteModal(true);
  };

  /*
  |--------------------------------------------------------------------------
  | CONFIRM DELETE
  |--------------------------------------------------------------------------
  */
  const confirmDelete = () => {
    if (selectedTrainee) {
      onDelete(selectedTrainee.id);
    }

    setShowDeleteModal(false);
    setSelectedTrainee(null);
  };

  return (
    <>
      <div className="border-2 border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.20)] rounded-xl overflow-hidden">
        
        <div className="max-h-[350px] overflow-y-auto">
          <table className="w-full min-w-[900px]">

            {/* TABLE HEADER */}
            <thead className="bg-gray-200 sticky top-0 z-10">
              <tr>
                <th className="text-left py-4 px-4">
                  Full Name
                </th>

                <th className="text-left py-4 px-4">
                  Trainee ID
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
              {trainees.length > 0 ? (
                trainees.map((trainee) => (
                  <tr
                    key={trainee.id}
                    className="border-b border-gray-300 hover:bg-gray-100"
                  >
                    <td className="py-4 px-4">
                      {trainee.fullName}
                    </td>

                    <td className="px-4">
                      {trainee.traineeId}
                    </td>

                    <td className="px-4">
                      {trainee.email}
                    </td>

                    <td className="px-4">
                      <StatusBadge
                        status={trainee.status}
                      />
                    </td>

                    <td className="px-4">
                      {trainee.verificationStatus}
                    </td>

                    <td className="px-4">
                      {trainee.status ===
                      "Pending" ? (
                        <div className="flex gap-2">

                          <button
                            onClick={() =>
                              onApprove(
                                trainee.id
                              )
                            }
                            className="px-4 py-2 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200"
                          >
                            Approve
                          </button>

                          <button
                            onClick={() =>
                              onReject(
                                trainee.id
                              )
                            }
                            className="px-4 py-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200"
                          >
                            Reject
                          </button>

                        </div>
                      ) : (
                        <button
                          onClick={() =>
                            handleDeleteClick(
                              trainee
                            )
                          }
                          className="px-4 py-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200"
                        >
                          Delete
                        </button>
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
                    No trainees found.
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </div>

      {/* DELETE MODAL */}
      <DeleteModal
        isOpen={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
          setSelectedTrainee(null);
        }}
        onConfirm={confirmDelete}
        title="Do you want to delete this trainee?"
      />
    </>
  );
}

export default TraineeTable;