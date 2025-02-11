const Footer = () => {
    const year = new Date().getFullYear(); // useState ve useEffect kullanmadan yılı dinamik alıyoruz.
  
    return (
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4 text-center text-gray-200">
          <p className="text-gray-500">© {year} Zcrum | All Rights Reserved. Developed by <a href="https://github.com/enesmetek" target="_blank" className="text-white">Enes Mete Kafali</a>.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  