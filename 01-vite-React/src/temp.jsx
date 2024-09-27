
function Temp(){
    return(
        <h2>Hello my name is Yogesh</h2>
    )
}

export default Temp

//! for react apps created by vite

// if we use js not jsx then -> error: If you are using JSX, make sure to name the file with the .jsx or .tsx extension.

// if we use temp not Temp then the page content will not load up 404

// good practice is to make jsx file name start with capital latter 

/* in tsx

const Temp: React.FC = () => {
  return (
    <h2>Hello, my name is Yogesh</h2>
  );
}

export default Temp;

*/