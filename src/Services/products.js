const obj = [
  {
    id: 1,
    name: "Audifonos",
    description:
      "Audífonos Havit - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    price_total: 35.0,
    category_id: 3,
    category_name: 'Audífonos',
    img_url:
      "https://lausutec.com/wp-content/uploads/2021/03/unnamed.png-247x296.jpg",
    stock: 20,
  },
  {
    id: 2,
    name: "Parlantes",
    description:
      "Parlantes JBL - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    price_total: 120.0,
    category_id: 1,
    category_name: 'Parlantes',
    img_url:
      "https://lausutec.com/wp-content/uploads/2021/04/JBL_Go2_Hero_Midnight_Black-1605x1605px-247x296.png",
    stock: 25,
  },
  {
    id: 3,
    name: "Audifonos Gamer",
    description:
      "Audífonos para tu PC - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    price_total: 145.0,
    category_id: 3,
    category_name: 'Audífonos',
    img_url:
      "https://lausutec.com/wp-content/uploads/2021/03/audifono-gamenote-247x296.jpeg",
    stock: 50,
  },
  {
    id: 4,
    name: "Iphone 11 Pro Max 256GB",
    description:
      "APPLE IPHONE 11 PRO MAX 256GB - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    price_total: 2800.0,
    category_id: 2,
    category_name: 'Celulares',
    img_url:
      "https://lausutec.com/wp-content/uploads/2021/04/IPHONE-11-PRO-MAX-GOLD-247x296.jpg",
    stock: 15,
  },
  {
    id: 5,
    name: "Laptop Dell 4GB 1TB 14″",
    description:
      "Laptop Dell 4GB 1TB 14 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    price_total: 2979.99,
    category_id: 4,
    category_name: 'Laptops',
    img_url:
      "https://lausutec.com/wp-content/uploads/2021/06/WhatsApp-Image-2021-06-08-at-12.10.30-PM-247x296.jpeg",
    stock: 5,
  },
];

const obj_category = [
  {
    id: 1,
    name: "Parlantes",
    description: "Categoría - Parlantes",
  },
  {
    id: 2,
    name: "Celulares",
    description: "Categoría - Celulares",
  },
  {
    id: 3,
    name: "Audífonos",
    description: "Categoría - Audífonos",
  },
  {
    id: 4,
    name: "Laptops",
    description: "Categoría - Laptops",
  },
];

export const getItems = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(obj);
    }, 1000);
  });
};

export const getItem = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(obj[2]);
    }, 1000);
  });
};

export const getItemById = (id) => {
  return new Promise((resolve, reject) => {
    const item = obj.find((e) => parseInt(e.id) === parseInt(id));
    setTimeout(() => {
      resolve(item);
    }, 1000);
  });
};

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(obj_category);
    }, 1000);
  });
};

export const getItemsByCategoryId = (name) => {
  return new Promise((resolve,reject) => {
    const items = obj.filter(e => e.category_name === name);
    setTimeout(() => {
      resolve(items);
    }, 1000);
  });
}
