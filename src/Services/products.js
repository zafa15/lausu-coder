const obj = [
    {
      id:1,
      name:'Audifonos',
      description:'Audífonos Havit - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
      price_total: 35.00,
      img_url:'https://lausutec.com/wp-content/uploads/2021/03/unnamed.png-247x296.jpg',
      stock:20
    },
    {
      id:2,
      name:'Parlantes',
      description:'Parlantes JBL - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
      price_total: 120.00,
      img_url:'https://lausutec.com/wp-content/uploads/2021/04/JBL_Go2_Hero_Midnight_Black-1605x1605px-247x296.png',
      stock:25
    },
    {
      id:3,
      name:'Audifonos Gamer',
      description:'Audífonos para tu PC - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
      price_total: 145.00,
      img_url:'https://lausutec.com/wp-content/uploads/2021/03/audifono-gamenote-247x296.jpeg',
      stock:50
    },
    {
      id:4,
      name:'Iphone 11 Pro Max 256GB',
      description:'APPLE IPHONE 11 PRO MAX 256GB - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
      price_total: 2800.00,
      img_url:'https://lausutec.com/wp-content/uploads/2021/04/IPHONE-11-PRO-MAX-GOLD-247x296.jpg',
      stock:15
    }
  ]
 
export const getItems = () => {
    return new Promise((resolve,reject) =>{
      setTimeout(() => {
          resolve(obj)
        },2000)
    })
  }

  export const getItem = () =>{
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(obj[2])
      },2000)
    })
  }
  