import { useState } from "react";

import SearchBar from "../../../components/admin/shared/SearchBar";

import StatusFilter from "../../../components/admin/trainee-management/StatusFilter";
import VerificationFilter from "../../../components/admin/trainee-management/VerificationFilter";

import TraineeTable from "../../../components/admin/trainee-management/TraineeTable";
/*
|--------------------------------------------------------------------------
| TEMPORARY MOCK DATA
|--------------------------------------------------------------------------
| Frontend Development Only
|
| TODO (Backend):
| Replace this mock data with data from the Trainees API.
|
| Example:
| GET /api/trainees
|--------------------------------------------------------------------------
*/
const initialTrainees = [
  {
    id: 1,
    fullName: "John Doe",
    traineeId: "TRN-2023-001",
    email: "john.doe@example.com",
    status: "Pending",
    verificationStatus: "Not Verified",
  },
  {
    id: 2,
    fullName: "Jane Smith",
    traineeId: "TRN-2023-002",
    email: "jane.smith@example.com",
    status: "Pending",
    verificationStatus: "Not Verified",
  },
  {
    id: 3,
    fullName: "Alice Brown",
    traineeId: "TRN-2023-003",
    email: "alice@test.co",
    status: "Approved",
    verificationStatus: "Verified",
  },
  {
    id: 4,
    fullName: "Bob Green",
    traineeId: "TRN-2023-004",
    email: "bob.green@edu.ph",
    status: "Approved",
    verificationStatus: "Verified",
  },
  {
    id: 5,
    fullName: "Charlie White",
    traineeId: "TRN-2023-005",
    email: "c.white@mail.com",
    status: "Rejected",
    verificationStatus: "N/A",
  },
  {
    id: 6,
    fullName: "MAMAMO",
    traineeId: "TRN-2023-006",
    email: "MAMAMO@mail.com",
    status: "Rejected",
    verificationStatus: "N/A",
  },

];

function TraineeManagement() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [verificationFilter, setVerificationFilter] = useState("All");

  /*
  |--------------------------------------------------------------------------
  | BACKEND INTEGRATION POINT
  |--------------------------------------------------------------------------
  | Currently uses mock data.
  |
  | TODO (Backend):
  | Replace initialTrainees with API response.
  |
  | Example:
  | const [trainees, setTrainees] = useState([]);
  |
  | useEffect(() => {
  |   fetch("/api/trainees")
  |     .then(res => res.json())
  |     .then(data => setTrainees(data));
  | }, []);
  |--------------------------------------------------------------------------
  */
  const [trainees, setTrainees] = useState(initialTrainees);

  /*
  |--------------------------------------------------------------------------
  | APPROVE TRAINEE
  |--------------------------------------------------------------------------
  | Current: Updates frontend state only.
  |
  | TODO (Backend):
  | Replace with API request.
  |
  | Example:
  | PATCH /api/trainees/:id/approve
  |--------------------------------------------------------------------------
  */
  const handleApprove = (id) => {
    setTrainees((prev) =>
      prev.map((trainee) =>
        trainee.id === id
          ? {
            ...trainee,
            status: "Approved",
            verificationStatus: "Verified",
          }
          : trainee
      )
    );
  };

  /*
  |--------------------------------------------------------------------------
  | REJECT TRAINEE
  |--------------------------------------------------------------------------
  | Current: Updates frontend state only.
  |
  | TODO (Backend):
  | Replace with API request.
  |
  | Example:
  | PATCH /api/trainees/:id/reject
  |--------------------------------------------------------------------------
  */
  const handleReject = (id) => {
    setTrainees((prev) =>
      prev.map((trainee) =>
        trainee.id === id
          ? {
            ...trainee,
            status: "Rejected",
            verificationStatus: "N/A",
          }
          : trainee
      )
    );
  };
  /*
  |--------------------------------------------------------------------------
  | DELETE TRAINEE
  |--------------------------------------------------------------------------
  | Current: Removes trainee from frontend state only.
  |
  | TODO (Backend):
  | Replace with API request.
  |
  | Example:
  | DELETE /api/trainees/:id
  |--------------------------------------------------------------------------
  */
  const handleDelete = (id) => {
    setTrainees((prev) =>
      prev.filter((trainee) => trainee.id !== id)
    );
  };
  /*
  |--------------------------------------------------------------------------
  | FRONTEND FILTERING
  |--------------------------------------------------------------------------
  | Current: Filtering is done on the frontend.
  |
  | TODO (Backend - Optional):
  | If dataset becomes large, filtering can be moved to API queries.
  |--------------------------------------------------------------------------
  */
  const filteredTrainees = trainees.filter((trainee) => {
    const matchesSearch =
      trainee.fullName.toLowerCase().includes(search.toLowerCase()) ||
      trainee.email.toLowerCase().includes(search.toLowerCase()) ||
      trainee.traineeId.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || trainee.status === statusFilter;

    const matchesVerification =
      verificationFilter === "All" ||
      trainee.verificationStatus === verificationFilter;

    return matchesSearch && matchesStatus && matchesVerification;
  });

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-gray-900">
          Trainees
        </h1>

        <p className="text-gray-600">
          Manage and review trainee accounts
        </p>
      </div>

      {/* Search and Filter Controls */}
      <div className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.35)] p-6 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <StatusFilter
            value={statusFilter}
            onChange={setStatusFilter}
          />

          <VerificationFilter
            value={verificationFilter}
            onChange={setVerificationFilter}
          />
        </div>
      </div>

      {/* Trainee Data Table */}
      <div className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.35)] p-6">
        <TraineeTable
          trainees={filteredTrainees}
          onApprove={handleApprove}
          onReject={handleReject}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default TraineeManagement;