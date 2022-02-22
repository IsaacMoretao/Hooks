import React, { useState, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFatorial(num) {
  const n = parseInt(num);
  if (n < 0) return -1;
  if (n === 0) return 1;
  return calcFatorial(n - 1) * n;
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(0);
  const [fatorial, setFatorial] = useState(0);
  const [number2, setNumber2] = useState(0);
  
  useEffect(
    function () {
      setFatorial(calcFatorial(number));
    },
    [number]
    
  );
  const [status, setStatus] = useState("Ímpar")

 useEffect(function() {

    setStatus(number2 == 0 ? "" : 
    (number2 > 1000000000  ? "[error]" : 
    (number2 * 3 === 9 ? "[error]" : 
    (number2 % 2 === 0 ? "par" : "Ímpar" )))
    )
    
  });

  useEffect(
    function () {
      if (fatorial > 1000000) document.title = "Eita!!";
    },
    [fatorial]
  );

    {/* === 👇 HTML 👇 === */}

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      {/* === ↓ Exercício ↓ === */}

           <SectionTitle title=" Exerxício: " />
        <p>
            <br />
        
           <div className="center ">
             <div>
               <span className="text">Fatorial:</span>
               <span className="text red">
                 {fatorial === -1 ? "Valor não existe" : fatorial}
               </span>
             </div>
             <input
               className="input"
               type="number"
               value={number}
               onChange={(e) => setNumber(e.target.value)}
             />
             </div>
             <br/>
        </p>   

      {/* === ↑ Exercício ↑ === */}

       {/* === ↓ Desafio ↓ === */}
      <SectionTitle title=" Desafio: " />
      <div className="center " >
          <div>
              <br />
              <span className="text">O numero é: </span>
              <span className="text red">{status}</span>
              <input
               className="input"
               type="number"
               value={number2}
               onChange={(e) => setNumber2(e.target.value)}
             />
            
          </div>

      </div>
       {/* === ↑ Desafio ↑ === */}


    </div>
  );
};

export default UseEffect;

