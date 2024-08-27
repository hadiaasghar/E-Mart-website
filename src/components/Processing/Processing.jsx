
const Processing = () => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'flex-start', 
      height: '100vh', 
      paddingTop: '100px', // Adjust as needed
      backgroundColor: 'rgba(0, 0, 0, 0.4)', // Light blur effect
      backdropFilter: 'blur(2px)', // Blur effect
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000
    }}>
    <div className="flex flex-col justify-center gap-4">
      <img 
        src="/loading-loader.gif" 
        alt="Loading..." 
        style={{ width: '150px' }} // Adjust the size as needed
      />
      <h1 className="text-4xl font-bold text-white">Processing ....</h1>
    </div>
    </div>
  );
};

export default Processing;
