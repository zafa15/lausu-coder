const obj = [
    {
      id:1,
      name:'Audifonos',
      description:'Audífonos Havit',
      img_url:'https://lausutec.com/wp-content/uploads/2021/03/unnamed.png-247x296.jpg',
      stock:20
    },
    {
      id:2,
      name:'Parlantes',
      description:'Parlantes JBL',
      img_url:'https://lausutec.com/wp-content/uploads/2021/04/JBL_Go2_Hero_Midnight_Black-1605x1605px-247x296.png',
      stock:25
    },
    {
      id:3,
      name:'Audifonos Gamer',
      description:'Audífonos para tu PC',
      img_url:'https://lausutec.com/wp-content/uploads/2021/03/audifono-gamenote-247x296.jpeg',
      stock:50
    },
    {
      id:4,
      name:'Iphone 11 Pro Max 256GB',
      description:'APPLE IPHONE 11 PRO MAX 256GB',
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
  