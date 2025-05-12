import Card from "@/components/card";

export default function Login() {
  return (
    <Card>
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border border-gray-300 rounded"
        />
        <button className="bg-blue-500 text-white p-2 rounded">Login</button>
      </form>
    </Card>
  );
}
