const axios = require('axios').default;

export default function makeAPIRequest<Type>(location: string){
    return new Promise<Type>((resolve,reject)=>{axios
        .get(location)
        .then((result:Type)=>{
            resolve(result)
        })
        .catch(()=>{
            reject();
        });
    });
}