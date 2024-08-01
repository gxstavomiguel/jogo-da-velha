function MyButton(){
 function handleClick(){
  alert('você clicou no botão!');
 }

  return (
    <button onClick={handleClick}>
      Clique aqui
    </button>
  );

}

function AboutPage(){
  return (
    <>
    <h1>Sobre</h1>
    <p>Olá.<br/>Como vai?</p>
    </>
  );
}

<img className="avatar" />

const user = {
  name: 'Gustavo',
  imageUrl: '',
  imageSize: 90,
};

const product = [
  { title: 'repolho', isFruit: false, id: 1 },
  { title: 'alho',  isFruit: false, id: 2 },
  { title: 'Maça',  isFruit: true, id: 3 }
];



export default function Profile(){

  const listItems = product.map(product =>
    <li 
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
    {product.title}
    </li>
  );
  
  return (
   // <ul>{listItems}</ul>
   <MyButton/>

)

}

  
 
  
