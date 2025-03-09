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

//Seleccionar ciertos atributos
// export type CartItem = Pick<Guitar, 'id'|'name'|'price'> &{
//     quantity:number
// }

export type CartItem = Guitar &{ 
    quantity:number
}



