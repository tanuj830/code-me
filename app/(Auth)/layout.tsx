import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center h-screen  w-full bg-[url(https://img.freepik.com/free-vector/background-line-gradient-luxury-style_483537-3308.jpg?size=626&ext=jpg&ga=GA1.1.1744345052.1697731330&semt=ais)] bg-no-repeat">
      {children}
    </div>
  );
}
