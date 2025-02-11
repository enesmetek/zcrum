const Footer = () => {
    const year = new Date().getFullYear(); // useState ve useEffect kullanmadan yılı dinamik alıyoruz.
  
    return (
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4 text-center text-gray-200">
          <p>© {year} Zcrum | All Rights Reserved. Developed by Enes Mete Kafalı.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  