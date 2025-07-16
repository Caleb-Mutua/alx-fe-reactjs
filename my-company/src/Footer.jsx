function Footer() {
  return (
    <footer style={{ background: '#333', color: 'white', textAlign: 'center', padding: '10px', marginTop: '40px' }}>
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer; 