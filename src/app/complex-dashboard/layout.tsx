export default function Layout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoginPage = false;

  return isLoginPage ? (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Complex Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-1">
          <div className="grid grid-cols-1 gap-4">
            <div className="col-span-1">{revenue}</div>
            <div className="col-span-1">{users}</div>
          </div>
        </div>
        <div className="col-span-1">{notifications}</div>
      </div>
      {children}
    </div>
  ) : (
    <div className="flex flex-col gap-4">{login}</div>
  );
}
