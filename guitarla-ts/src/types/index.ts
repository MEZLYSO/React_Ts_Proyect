// Objeto para aplicar propiedades en una coleccion de datos
// definimos un objeto para que sea la plantilla de los demas

//Version con types
export type Guitar = {
    id : number;
    name: string;
    image: string;
    description : string;
    price: number;
}

// Version con Interfaces
// interface Guitar  {
//     id : number;
//     name: string;
//     image: string;
//     description : string;
//     price: number;
// }

//Herencia en interfaces
// export interface CartItem extends Guitar{ 
//     quantity:number
// }

//CartItem
export type CartItem = Guitar &{ 
    quantity:number
}
