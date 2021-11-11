class UserService{



    constructor() {
        this.taxiDrivers = [
        {"dni":"Seleccione","name":"Seleccione"},
        {"dni":"93479822","name":"Enrique Neyra"},
        {"dni":"27636365","name":"Alejandro Nieto"},
        {"dni":"93479823","name":"Gustavo Campos"},
        {"dni":"18444560","name":"Fabio Battaglini"},
        {"dni":"95624827","name":"José Luis Valero "},
        {"dni":"21947720","name":"Pablo Failoni"},        

        {"dni":"6057620", "name":"Alberto Talpalar"},        
        {"dni":"21709714","name":"Laura Alderete"},        
        {"dni":"21709713","name":"Rolando Mansilla"},        

        {"dni":"34404216","name":"Pablo O Malianni"},
        {"dni":"27803204","name":"Carlos Laffitte"}       
        ];
    }

    getAllDrivers= async ()=>{
        return this.taxiDrivers;
    }

}

const service = new UserService();

export default service; 
