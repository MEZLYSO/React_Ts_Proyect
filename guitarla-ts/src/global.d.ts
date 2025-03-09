//Soluciona el problema de los estilos en Ts
declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
  
}