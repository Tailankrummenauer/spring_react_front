import TabelaProduto from './Tabela';
import './App.css';
import  Form  from './Formulario';
import { useEffect, useState } from 'react';

function App() {

  //objeto para manipulação dos dados para mandar pro banco
 const produto ={
  codigo : 0,
  nome : '',
  marca : ''
 }


  const [btnCadastrar, setBtnCadastrar] = useState (true);
  const [produtos, setProdutos] = useState ([]);
  const [objProduto, setObjProduto] = useState (produto)
  
  

  //useEffect esse fetch sem configuração faz por padrao GET
  useEffect(()=>{
    fetch("http://localhost:8080/listar")
    .then(resp => resp.json())
    .then(data => {
      setProdutos(data);
    })
    .catch(err => console.error(err))

  }, [])

  
  //obtendo os dados do form
  const  dadosFormulario = (e) =>{
    setObjProduto({...objProduto, [e.target.name]:e.target.value})
  }

  //cadastrar produto
  const CadastrarProduto = () => {
  fetch('http://localhost:8080/cadastrar',{
    method:'post',
    body:JSON.stringify(objProduto),
    headers:{
      'Content-type':'application/json',
      'Accept':'application/json'
    }
  })
  .then(retorno => retorno.json())
  .then(retorno_convertido => {
     if(retorno_convertido.mensagem !== undefined){
      alert(retorno_convertido.mensagem);
    }else{
      setProdutos([...produtos, retorno_convertido]);
      alert('Produto cadastrado com sucesso!');
      LimparFormulario();
    }
    
  })
}

const Remover=()=>{
  fetch('http://localhost:8080/delete/'+objProduto.codigo, {
    method:'delete',
    headers:{
      'Content-type':'application/json',
      'Accept':'application/json'
    },
  }).then(resp => resp.json())
  .then(data => {
    
    setObjProduto(objProduto.filter((produto) => produto.codigo !== objProduto.codigo))
    alert(data.mensagem)
  })
}

  const LimparFormulario =() => {
    setObjProduto(produto);
  }

  //selecionar produto, passa como parametro INDICE para saber qual produto esta sendo selecionado
  const selecionarProduto = (indice) =>{
    setObjProduto(produtos[indice])
    setBtnCadastrar(false)
  }
  

  const cancelar =()=>{
    LimparFormulario()
    setBtnCadastrar(true)
  }

  return (
    <div>
      <p>{JSON.stringify(objProduto)}</p>
       <Form botao={btnCadastrar} aoDigitar = {dadosFormulario} cadastrar={CadastrarProduto} limparFormulario={objProduto} cancelarProduto ={cancelar} RemoverProduto={Remover}></Form>
       <TabelaProduto produtos={produtos} selecionarProduto={selecionarProduto}  ></TabelaProduto>
    </div>
  );
}

export default App;



