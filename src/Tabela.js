export default function TabelProdutos({ produtos, selecionarProduto }) {
    return (
        <>
       
            <h1 className="alinhamento_titulo">Tabela</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Marca</th>
                        <th>Selecionar</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((obj, indice) => (
                        <tr key={indice}>
                            <td>{indice + 1}</td>
                            <td>{obj.nome}</td>
                            <td>{obj.marca}</td>
                            <td><button onClick={() =>{selecionarProduto(indice)}} className="btn btn-success">Selecionar</button></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    )
}