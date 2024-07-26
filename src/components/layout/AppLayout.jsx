function AppLayout({ children }) {
  return (
    <div className="flex flex-col lg:grid lg:grid-rows-[auto_auto_1fr_auto_auto] h-screen">
      {children}
    </div>
  );
}

export default AppLayout;
