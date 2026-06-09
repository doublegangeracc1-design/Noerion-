import { useState } from "react";

import SearchBar from "../../../components/admin/shared/SearchBar";
import AssessorTable from "../../../components/admin/assessor-management/AssessorTable";
import AssessorStatusFilter from "../../../components/admin/assessor-management/AssessorStatusFilter";
import AssessorVerificationFilter from "../../../components/admin/assessor-management/AssessorVerificationFilter";

/*
|--------------------------------------------------------------------------
| TEMPORARY MOCK DATA
|--------------------------------------------------------------------------
| Frontend Development Only
|
| TODO (Backend):
| Replace with API response.
|--------------------------------------------------------------------------
*/

const initialAssessors = [
  {
    id: 1,
    fullName: "Emily Chen",
    assessorId: "ASR-2023-001",
    email: "emily.chen@example.com",
    status: "Active",
    verificationStatus: "Verified",
  },
  {
    id: 2,
    fullName: "Marcus Kim",
    assessorId: "ASR-2023-002",
    email: "marcus.kim@example.com",
    status: "Active",
    verificationStatus: "Not Verified",
  },
  {
    id: 3,
    fullName: "Sarah Jenkins",
    assessorId: "ASR-2023-003",
    email: "sarah.j@example.com",
    status: "Inactive",
    verificationStatus: "Verified",
  },
];

function AssessorManagement() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [verificationFilter, setVerificationFilter] =
    useState("All");

  /*
  |--------------------------------------------------------------------------
  | ASSESSOR DATA
  |--------------------------------------------------------------------------
  |
  | TODO (Backend):
  | Replace mock data with API response.
  |
  | Example:
  | GET /api/assessors
  |--------------------------------------------------------------------------
  */

  const [assessors, setAssessors] =
    useState(initialAssessors);

  /*
  |--------------------------------------------------------------------------
  | DEACTIVATE ASSESSOR
  |--------------------------------------------------------------------------
  |
  | Frontend:
  | Changes verification status only.
  |
  | Backend:
  | PATCH /api/assessors/:id
  |--------------------------------------------------------------------------
  */

  const handleDeactivate = (id) => {
    setAssessors((prev) =>
      prev.map((assessor) =>
        assessor.id === id
          ? {
              ...assessor,
              verificationStatus:
                "Not Verified",
            }
          : assessor
      )
    );
  };

  /*
  |--------------------------------------------------------------------------
  | REACTIVATE ASSESSOR
  |--------------------------------------------------------------------------
  |
  | Frontend:
  | Changes verification status only.
  |
  | Backend:
  | PATCH /api/assessors/:id
  |--------------------------------------------------------------------------
  */

  const handleReactivate = (id) => {
    setAssessors((prev) =>
      prev.map((assessor) =>
        assessor.id === id
          ? {
              ...assessor,
              verificationStatus:
                "Verified",
            }
          : assessor
      )
    );
  };

  /*
  |--------------------------------------------------------------------------
  | DELETE ASSESSOR
  |--------------------------------------------------------------------------
  |
  | Backend:
  | DELETE /api/assessors/:id
  |--------------------------------------------------------------------------
  */

  const handleDelete = (id) => {
    setAssessors((prev) =>
      prev.filter(
        (assessor) => assessor.id !== id
      )
    );
  };

  /*
  |--------------------------------------------------------------------------
  | UPDATE ASSESSOR
  |--------------------------------------------------------------------------
  |
  | Used by Edit Modal.
  |
  | Backend:
  | PUT /api/assessors/:id
  |--------------------------------------------------------------------------
  */

  const handleUpdateAssessor = (
    updatedAssessor
  ) => {
    setAssessors((prev) =>
      prev.map((assessor) =>
        assessor.id === updatedAssessor.id
          ? updatedAssessor
          : assessor
      )
    );
  };

  /*
  |--------------------------------------------------------------------------
  | FILTERING
  |--------------------------------------------------------------------------
  */

  const filteredAssessors =
    assessors.filter((assessor) => {
      const matchesSearch =
        assessor.fullName
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        assessor.email
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        assessor.assessorId
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ||
        assessor.status === statusFilter;

      const matchesVerification =
        verificationFilter === "All" ||
        assessor.verificationStatus ===
          verificationFilter;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesVerification
      );
    });

  return (
    <div className="p-6">

      {/* PAGE HEADER */}
      <div className="flex justify-between items-center mb-6">

        <div>
          <h1 className="text-4xl font-bold">
            Assessors
          </h1>

          <p className="text-gray-600">
            Manage assessor accounts and
            access
          </p>
        </div>

        <button className="bg-blue-900 text-white px-5 py-3 rounded-xl hover:bg-blue-800">
          + Add Assessor
        </button>

      </div>

      {/* SEARCH + FILTERS */}
      <div className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.35)] p-6 mb-6">

        <div className="flex flex-col lg:flex-row gap-4">

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <AssessorStatusFilter
            value={statusFilter}
            onChange={setStatusFilter}
          />

          <AssessorVerificationFilter
            value={verificationFilter}
            onChange={
              setVerificationFilter
            }
          />

        </div>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.35)] p-6">

        <AssessorTable
          assessors={filteredAssessors}
          onDeactivate={
            handleDeactivate
          }
          onReactivate={
            handleReactivate
          }
          onDelete={handleDelete}
          onUpdate={
            handleUpdateAssessor
          }
        />

        <div className="border-t mt-4 pt-4 text-sm text-gray-600">
          ⚠️ IMPORTANT: Deleting an
          assessor removes access but
          retains historical assessment
          records.
        </div>

      </div>

    </div>
  );
}

export default AssessorManagement;