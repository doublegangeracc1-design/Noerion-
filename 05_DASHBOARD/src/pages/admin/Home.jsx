import {
  Users,
  UserCheck,
  ClipboardList,
  Award,
} from "lucide-react";

function Home() {
  // Dashboard Statistics
  const dashboardData = {
    totalTrainees: 0,
    totalAssessors: 0,
    totalAssessments: 0,
    certificatesIssued: 0,
  };

  // Analytics
  const passRate = 0;
  const completionRate = 0;

  // Future Backend Data
  const assessments = [];
  const certificates = [];
  const activities = [];

  // TODO: Replace with API data from backend

  return (
    <div className="space-y-6">
      {/* OVERVIEW CARDS */}
      <div className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.35)] p-6">
        <h2 className="text-2xl font-bold mb-6">
          OVERVIEW CARDS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Total Trainees */}
          <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.20)] p-5">
            <h3 className="font-bold text-lg mb-4">
              TOTAL TRAINEES
            </h3>

            <div className="flex items-center gap-4">
              <Users size={40} />

              <span className="text-4xl font-bold">
                {dashboardData.totalTrainees}
              </span>
            </div>
          </div>

          {/* Total Assessors */}
          <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.20)] p-5">
            <h3 className="font-bold text-lg mb-4">
              TOTAL ASSESSORS
            </h3>

            <div className="flex items-center gap-4">
              <UserCheck size={40} />

              <span className="text-4xl font-bold">
                {dashboardData.totalAssessors}
              </span>
            </div>
          </div>

          {/* Total Assessments */}
          <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.20)] p-5">
            <h3 className="font-bold text-lg mb-4">
              TOTAL ASSESSMENTS
            </h3>

            <div className="flex items-center gap-4">
              <ClipboardList size={40} />

              <span className="text-4xl font-bold">
                {dashboardData.totalAssessments}
              </span>
            </div>
          </div>

          {/* Certificates Issued */}
          <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.20)] p-5">
            <h3 className="font-bold text-lg mb-4">
              CERTIFICATES ISSUED
            </h3>

            <div className="flex items-center gap-4">
              <Award size={40} />

              <span className="text-4xl font-bold">
                {dashboardData.certificatesIssued}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* SECOND MAIN CONTAINER */}
      <div className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.35)] p-6">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* LEFT SIDE */}
          <div className="xl:col-span-2 space-y-6">
            {/* ACTIVE ASSESSMENTS */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                ACTIVE ASSESSMENTS PANEL
              </h2>

              <div className="overflow-hidden rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.20)]">
                <table className="w-full">
                  <thead className="bg-gray-300">
                    <tr>
                      <th className="text-left p-3">
                        Trainee Name
                      </th>

                      <th className="text-left p-3">
                        Assessment Type
                      </th>

                      <th className="text-left p-3">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    {assessments.length === 0 ? (
                      <tr>
                        <td className="p-3">
                          No data available
                        </td>

                        <td className="p-3">-</td>

                        <td className="p-3">-</td>
                      </tr>
                    ) : (
                      assessments.map((assessment) => (
                        <tr key={assessment.id}>
                          <td className="p-3">
                            {assessment.traineeName}
                          </td>

                          <td className="p-3">
                            {assessment.assessmentType}
                          </td>

                          <td className="p-3">
                            {assessment.status}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* CERTIFICATE STATUS */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                CERTIFICATE STATUS PANEL
              </h2>

              <div className="overflow-hidden rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.20)]">
                <table className="w-full">
                  <thead className="bg-gray-300">
                    <tr>
                      <th className="text-left p-3">
                        Trainee Name
                      </th>

                      <th className="text-left p-3">
                        Course
                      </th>

                      <th className="text-left p-3">
                        Certificate Status
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    {certificates.length === 0 ? (
                      <tr>
                        <td className="p-3">
                          No data available
                        </td>

                        <td className="p-3">-</td>

                        <td className="p-3">-</td>
                      </tr>
                    ) : (
                      certificates.map((certificate) => (
                        <tr key={certificate.id}>
                          <td className="p-3">
                            {certificate.traineeName}
                          </td>

                          <td className="p-3">
                            {certificate.course}
                          </td>

                          <td className="p-3">
                            {certificate.status}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* RECENT ACTIVITY */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              RECENT ACTIVITY
            </h2>

            <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.20)] p-4">
              {activities.length === 0 ? (
                <p>No recent activity</p>
              ) : (
                activities.map((activity) => (
                  <p key={activity.id}>
                    {activity.message}
                  </p>
                ))
              )}
            </div>
          </div>
        </div>

        {/* QUICK ANALYTICS */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">
            QUICK ANALYTICS
          </h2>

          <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.30)] p-4">
            <div className="space-y-5">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Pass Rate</span>
                  <span>{passRate}%</span>
                </div>

                <div className="w-full h-3 bg-gray-200 rounded-full">
                  <div
                    className="h-3 bg-blue-600 rounded-full"
                    style={{ width: `${passRate}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Completion Rate</span>
                  <span>{completionRate}%</span>
                </div>

                <div className="w-full h-3 bg-gray-200 rounded-full">
                  <div
                    className="h-3 bg-blue-600 rounded-full"
                    style={{
                      width: `${completionRate}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;