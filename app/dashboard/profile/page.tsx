"use client";

import AdditionalInfoCard from "@/components/cards/additional.details.card";
import FollowerCard from "@/components/cards/followers.card";
import SummaryCard from "@/components/cards/summary.card";
import UserDetailCard from "@/components/cards/user.details.card";
import { UserDataProps, getUserDetails } from "@/lib/user-details";
import { useAppSelector } from "@/store/store";
import { useEffect, useState } from "react";



export default function Profile() {
  const username = useAppSelector((state) => state.username.username);

  const [userData, setUserData] = useState<UserDataProps | null>(null);
const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserDetails({ username });
        setUserData(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("An error occurred while fetching data. Please try again later.");
      }
    };

    fetchData();
  }, []);

  if (error) {
    // error display code here (e.g., error banner or animation)
    return <p>Error: {error}</p>;
  }

  if (!userData) {
    // Loading section code here
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col md:flex-row p-10 bg-white gap-10">
      <div className="flex flex-1 gap-3 flex-col">
        <div className="">
          <UserDetailCard {...userData}
          />
        </div>

        <div className="">
        <SummaryCard {...userData} />
        </div>

        <div className="border border-black">Recent Hashtags</div>
      </div>

      <div className="flex flex-1 gap-3 flex-col ">
        <div className="">
          <FollowerCard {...userData}  />
        </div>
        <div className="">
          <AdditionalInfoCard {...userData}  />
        </div>
      </div>
    </div>
  );
}
