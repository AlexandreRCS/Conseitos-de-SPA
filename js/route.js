export class Router{

    routes = {}
    
    add(routeName, page){
        this.routes[routeName] = page
    }


    route(event){
        event = event || window.event
    
        event.preventDefault()
    
        window.history.pushState({}, "", event.target.href)
    
        this.handle()
    }

    handle(){
        const {pathname} = window.location
        const route = this.routes[pathname] || this.routes[404]
        // FETCH PROMETE QUE VAI BUSCAR UMA ROTA
        fetch(route)
        // THEN :  ENTÀO QUANDO CONCLUIR EXECUTA ESSA FUNÇÀO
        .then(data => data.text()
        // O DATA TEXT E RETONA OS DADOS DE FORMA AUTOMATICA PARA THEN
        // O HTMT E O NOME DO DADO NESSE THEN MAIS PODE SER QUALQUER NOME
        ).then(html => {
            document.querySelector('#app').innerHTML = html
        })
    }
    
}