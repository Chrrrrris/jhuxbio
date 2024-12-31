import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 mt-16 py-6 text-center border-t border-gray-200">
      <p className="text-lg text-gray-500">
        &copy; {new Date().getFullYear()} JHUxBIO. All rights reserved.
      </p>
    </footer>
  );
}