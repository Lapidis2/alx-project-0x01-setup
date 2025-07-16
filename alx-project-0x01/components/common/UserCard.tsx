// components/common/UserCard.tsx

import { UserData } from "@/interfaces";

interface UserCardProps {
  user: UserData;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => (
  <div className="p-4 bg-white rounded-lg shadow">
    <h2 className="font-bold text-lg">{user.name}</h2>
    <p className="text-sm text-gray-500">{user.email}</p>
    <p className="text-sm text-gray-500">{user.phone}</p>
    <p className="text-sm text-gray-500">{user.website}</p>
  </div>
);

export default UserCard;
