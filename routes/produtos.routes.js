import { produtosServices } from "../db/services/produtos.sevices.js";

export const produtosRoute = (app) => {
     app.get('/produtos', produtosServices.buscarTodos)
    
    app.get('/produto/:id', produtosServices.buscarPorId)
    
    app.post('/produto', produtosServices.addProduto)
    
    app.put('/produto/:id', produtosServices.atualizarProduto);
    
    app.delete('/produto/:id',produtosServices.deletarProduto);
}