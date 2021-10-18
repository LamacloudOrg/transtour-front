class UserService{



    constructor() {
        this.taxiDrivers = [{"dni":"20100201","name":"Juan"},
        {"dni":"93479822","name":"Kike"},
        {"dni":"93479822","name":"Quique"},
        {"dni":"34404216","name":"Pablo"},
        {"dni":"20100204","name":"Manuel"},
        {"dni":"27803204","name":"charly"}
    
        ];
    }

    getAllDrivers= async ()=>{
        return this.taxiDrivers;
    }

}

const service = new UserService();

export default service; 
