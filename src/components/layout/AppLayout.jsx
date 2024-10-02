function AppLayout({ children }) {
  return (
    <div className="flex flex-col lg:grid lg:grid-rows-[auto_1fr__auto] h-screen">
      {children}
    </div>
  );
}

export default AppLayout;
