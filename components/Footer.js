import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary py-4">
      <div className="container mx-auto flex justify-between">
        {/* logo */}
        <Link href="/">
          <Image
            src="/images/mariador.png"
            alt="Mariador Logo"
            width={150}
            height={50}
          />
        </Link>
        <div className="mt-8">Copyright &copy; 2023. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
