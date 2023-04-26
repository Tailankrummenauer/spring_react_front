

export default function Form({botao, aoDigitar, cadastrar, limparFormulario, cancelarProduto, RemoverProduto}) {
    return (
        <>
            <form>
               <input  className="form-control" value={limparFormulario.nome} type="text" placeholder="Nome" name="nome" onChange={aoDigitar} />
               <input className="form-control" value={limparFormulario.marca} type="text" placeholder="Marca" name="marca" onChange={aoDigitar}/>


                {botao ? (
                <input type="button" value="Cadastrar" className="btn btn-primary" onClick={cadastrar}/>
                ) : (
                <div>
                <input type="button" value="Alterar" className="btn btn-warning"/>
                <input type="button" value="Excluir" className="btn btn-danger" onClick={RemoverProduto}/>
                <input type="button" value="Cancelar" onClick={cancelarProduto} className="btn btn-secondary"/>
                </div>
                )}
                
                
                
            </form>
            
        </>
    )
}