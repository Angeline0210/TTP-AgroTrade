//I am changing the image links from firebase to amazon, firebase has issues with these direct links. Please remember to add the amazon link(that will show up at the error) instead of firebase at the cofig for it to work out.

export const products = [
    {
      id: "64a654593e91b8e73a351e9b",
      name: "Empty Fruit Brunches from Kampung Sungai",
      description: "It was collected on 11/02/2024.",
      price: 10.3,
    //   brand: "apple",
      category: "Empty Fruit Brunches",
      inStock: true,
      images: [
        {
          color: "White",
          colorCode: "#FFFFFF",
          image:
            "https://m.media-amazon.com/images/I/71p-tHQ0u1L._AC_SX679_.jpg",
        },
        {
          color: "Gray",
          colorCode: "#808080",
          image:
            "https://m.media-amazon.com/images/I/417tEj3iJ8L._AC_.jpg",
        },
      ],
      reviews: [],
    },
    {
      id: "64a4ebe300900d44bb50628a",
      name: "Fibres from oil palm",
      description:
        "Unused fibres from oil palm need to sell.",
      price: 8.5,
    //   brand: "logitech",
      category: "Mesocarp Fibres",
      inStock: true,
      images: [
        {
          color: "Black",
          colorCode: "#000000",
          image:
            "https://m.media-amazon.com/images/I/71gOLg2-kqL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        },
      ],
      reviews: [
        {
          id: "64a65a6158b470c6e06959ee",
          userId: "6475af156bad4917456e6e1e",
          productId: "64a4ebe300900d44bb50628a",
          rating: 5,
          comment: "good",
          createdDate: "2023-07-06T06:08:33.067Z",
          user: {
            id: "6475af156bad4917456e6e1e",
            name: "Charles",
            email: "charles0303@gmail.com",
            emailVerified: null,
            image:
              "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
            hashedPassword: null,
            createdAt: "2024-02-20T08:08:53.979Z",
            updatedAt: "2024-02-20T08:08:53.979Z",
            role: "ADMIN",
          },
        },
      ],
    },
    {
      id: "648437b38c44d52b9542e340",
      name: "Trunks (Ipoh)",
      description:
        'Just collected from the oil palm few days ago.',
      price: 20.00,
    //   brand: "Apple",
      category: "Trunks",
      inStock: true,
      images: [
        {
          color: "Black",
          colorCode: "#000000",
          image:
            "https://m.media-amazon.com/images/I/61g+McQpg7L._AC_SX679_.jpg",
        },
        {
          color: "Blue",
          colorCode: " #0000FF",
          image:
            "https://m.media-amazon.com/images/I/713Om9vCHUL._AC_SX679_.jpg",
        },
        {
          color: "Red",
          colorCode: "#FF0000",
          image:
            "https://m.media-amazon.com/images/I/61thdjmfHcL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        },
      ],
      reviews: [
        {
          id: "6499b4887402b0efd394d8f3",
          userId: "6499b184b0e9a8c8709821d3",
          productId: "648437b38c44d52b9542e340",
          rating: 4,
          comment:
            "fast delivery!",
          createdDate: "2023-06-26T15:53:44.483Z",
          user: {
            id: "6499b184b0e9a8c8709821d3",
            name: "Chaoo",
            email: "chaoooooo@gmail.com",
            emailVerified: null,
            image:
              "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
            hashedPassword: null,
            createdAt: "2024-01-26T15:40:52.558Z",
            updatedAt: "2024-01-26T15:40:52.558Z",
            role: "USER",
          },
        },
        {
          id: "6499a110efe4e4de451c7edc",
          userId: "6475af156bad4917456e6e1e",
          productId: "648437b38c44d52b9542e340",
          rating: 5,
          comment: "Very useful!!",
          createdDate: "2024-02-16T14:30:40.998Z",
          user: {
            id: "6475af156bad4917456e6e1e",
            name: "Charles",
            email: "charles0303@gmail.com",
            emailVerified: null,
            image:
              "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
            hashedPassword: null,
            createdAt: "2024-02-15T08:08:53.979Z",
            updatedAt: "2024-02-25T08:08:53.979Z",
            role: "ADMIN",
          },
        },
      ],
    },
    {
      id: "64a4e9e77e7299078334019f",
      name: "Shell",
      description:
        "Palm kernel shell from Sungai Buloh.",
      price: 25.5,
    //   brand: "logitech",
      category: "Palm Kernel Shell",
      inStock: true,
      images: [
        {
          color: "Graphite",
          colorCode: " #383838",
          image:
            "https://m.media-amazon.com/images/I/61ni3t1ryQL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        },
      ],
      reviews: [],
    },
    {
      id: "649d775128b6744f0f497040",
      name: 'Fronds from Lumut',
      description:
        'Selling fronds for cheap price.',
      price: 15.00,
    //   brand: "Nerunsa",
      category: "Fronds",
      inStock: true,
      images: [
        {
          color: "Black",
          colorCode: "#000000",
          image:
            "https://m.media-amazon.com/images/I/71s4mjiit3L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        },
        {
          color: "Silver",
          colorCode: "#C0C0C0",
          image:
            "https://m.media-amazon.com/images/I/71zbWSRMaYL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        },
      ],
      reviews: [],
    },
  ];