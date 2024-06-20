import React from "react";
import Link from "next/link";
import { AccountBreadcrumbs } from "@/ui/breadcrumbs";

const SettingsPage = () => {
  return (
    <div>
      <AccountBreadcrumbs
        currentPage="settings"
        secondPage=""
        isPageDetail={false}
      />
      <h1 className="font-bold text-2xl mb-4">Settings</h1>
    </div>
  );
};

export default SettingsPage;
