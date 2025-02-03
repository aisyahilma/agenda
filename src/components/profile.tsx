import Avatar from "./avatar";

export function Profile() {
  return (
    <div className="flex items-center space-x-4">
      <Avatar src="https://github.com/aisyahilma.png" alt="Ilma" />
      <div>
        <p className="text-xl font-semibold text-gray-700">Ilma</p>
        <p className="text-sm text-gray-500">ilma@example.com</p>
      </div>
    </div>
  );
}
