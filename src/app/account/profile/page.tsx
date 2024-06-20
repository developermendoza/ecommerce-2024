import React from "react";
import Link from "next/link";
import { AccountBreadcrumbs } from "@/ui/breadcrumbs";

const ProfilePage = () => {
  return (
    <div>
      <AccountBreadcrumbs
        currentPage="profile"
        isPageDetail={false}
        secondPage=""
      />
      <h1 className="font-bold text-2xl mb-4">Profile</h1>
    </div>
  );
};

export default ProfilePage;
