import { Routes, Route } from "react-router-dom";
import { DashboardPage } from "../../pages/DashboardPage";
import { UsersPage } from "../../pages/UsersPage";
import { ReportsPage } from "../../pages/ReportsPage";
import { ProfilePage } from "../../pages/ProfilePage";
import { LoginPage } from "../../pages/LoginPage";
import { AccessDeniedPage } from "../../pages/AccessDeniedPage";
import { NotFoundPage } from "../../pages/NotFoundPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/reports" element={<ReportsPage />} />
      <Route path="/profile" element={<ProfilePage />} />

      <Route path="/403" element={<AccessDeniedPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
