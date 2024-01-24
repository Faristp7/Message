
export default function Blob() {
  const blobStyle = {
    backgroundColor: '#ffffff',
    opacity: 0.9,
    backgroundImage: 'radial-gradient(#000000 1px, #ffffff 2px)',
    backgroundSize: '40px 40px',
  };

  return (
    <div className="h-screen" style={blobStyle}>
      <h1>Ping</h1>
    </div>
  );
}
