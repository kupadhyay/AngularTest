export interface Element {
    name: string;
    position: number;
    size: string;
    price: number;
    img: string;
  }

export class ProjectConstants {
    public static PIZZA_LIST: Element[] = [
        {position: 1, name: 'Margerita', size: 'Small' , price: 300 , img: '../../assets/images/pizza/1.jpg'},
        {position: 2, name: 'Fresh veg', size: 'Medium' , price: 400 , img: '../../assets/images/pizza/2.jpg'} ,
        {position: 3, name: 'Cheese', size: 'Medium' , price: 350 , img: '../../assets/images/pizza/3.jpg'},
        {position: 4, name: 'Panir Capsicum', size: 'Large' , price: 200 , img: '../../assets/images/pizza/4.jpg'} ,
        {position: 5, name: 'Italian', size: 'Medium' , price: 500 , img: '../../assets/images/pizza/5.jpg'},
        {position: 6, name: 'Mexical', size: 'Medium' , price: 430 , img: '../../assets/images/pizza/6.jpg'},
        {position: 7, name: 'Thin', size: 'Medium' , price: 360 , img: '../../assets/images/pizza/7.jpg'}
    ];
}
