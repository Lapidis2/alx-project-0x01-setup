import { UserData } from "@/interfaces";

interface UserCardProps {
  user: UserData;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="max-w-md p-4 m-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
      <p className="text-gray-600">@{user.username}</p>
      <p className="text-sm text-gray-500">{user.email}</p>

      <div className="mt-2">
        <h3 className="font-semibold text-gray-700">Address:</h3>
        <p className="text-sm text-gray-600">
          {user.address.suite}, {user.address.street}, {user.address.city} ({user.address.zipcode})
        </p>
      </div>

      <div className="mt-2">
        <h3 className="font-semibold text-gray-700">Company:</h3>
        <p className="text-sm text-gray-600">
          <strong>Name:</strong> {user.company.name}<br />
          <strong>Catch Phrase:</strong> {user.company.catchPhrase}<br />
          <strong>BS:</strong> {user.company.bs}
        </p>
      </div>

      <div className="mt-2 text-sm text-gray-500">
         {user.phone} <br />
         {user.website}
      </div>
    </div>
  );
};

export default UserCard;
