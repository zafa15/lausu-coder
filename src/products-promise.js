const obj = [
    {
      id:1,
      name:'Audifonos',
      description:'Audífonos Havit',
      stock:20
    },
    {
      id:2,
      name:'Parlantes',
      description:'Parlantes JBL',
      stock:25
    },
    {
      id:3,
      name:'Audifonos Gamer',
      description:'Audífonos para tu PC',
      stock:50
    },
    {
      id:4,
      name:'Earpods Apple',
      description:'Audífonos Apple',
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
  