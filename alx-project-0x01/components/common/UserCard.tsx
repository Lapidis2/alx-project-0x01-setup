import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, company, address }) => {
  return (
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-800">{name} (@{username})</h2>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-600">Phone: {phone}</p>
      <p className="text-gray-600">Website: <a href={`https://${website}`} target="_blank" rel="noreferrer" className="text-blue-600 underline">{website}</a></p>
      <div className="mt-3">
        <p className="text-gray-500 text-sm">Company: {company.name}</p>
        <p className="text-gray-500 text-sm italic">"{company.catchPhrase}"</p>
      </div>
      <div className="mt-2 text-sm text-gray-500">
        <p>Address: {address.street}, {address.suite}, {address.city} - {address.zipcode}</p>
      </div>
    </div>
  );
};

export default UserCard;
