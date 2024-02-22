
export const products = [
    {
      id: "64a654593e91b8e73a351e9b",
      name: "Empty Fruit Brunches from Kampung Sungai",
      description: "It was collected on 11/02/2024.",
      price: 9.99,
    //   brand: "apple",
      category: "Empty Fruit Brunches",
      inStock: true,
      image:[{
        src:"/EFB-image.jpg",
        alt:"Empty Fruit Brunches",
      }],
      reviews: [],
    },


    {
      id: "64a4ebe300900d44bb50628a",
      name: "Fibres from oil palm",
      description:
        "Unused fibres from oil palm need to sell.",
      price: 7.99,
    //   brand: "logitech",
      category: "Mesocarp Fibres",
      inStock: true,
      image:[{
        src:"/fiber-image.png",
        alt:"Mesocarp Fiber",
      }],
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
            image:[{
              src:"/fiberReview-image.jpg",
              alt:"Mesocarp Fiber review",
            }],
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
        'Recently plucked from our thriving oil palm groves just days ago, these palm trunks embody freshness and quality. Carefully chosen for their robustness, our skilled harvesters ensure that only the best make the cut. Straight from the plantation to your kitchen, these trunks are ready to add a touch of natural goodness to your culinary creations. ',
      price: 19.99,
    //   brand: "Apple",
      category: "Trunks",
      inStock: true,
      image:[{
        src:"/trunk-image.jpg",
        alt:"Trunks",
      }],
    
      reviews:[{
          id: "65a75a6158b470c6e06959ee",
          userId: "3475af156bad4917456e6e1e",
          productId: "648437b38c44d52b9542e340",
          rating: 3,
          comment: "great",
          createdDate: "2023-08-06T06:08:33.067Z",
          user: {
            id: "6475af156bad4917456e6e1e",
            name: "Nana",
            email: "nanapipo@gmail.com",
            emailVerified: null,
            image:[{
              src:"/trunkReview-image.png",
              alt:"Trunks review",
            }],
            hashedPassword: null,
            createdAt: "2024-01-20T08:08:53.979Z",
            updatedAt: "2024-01-20T08:08:53.979Z",
            role: "ADMIN",
          },
        },],
    },

    {
      id: "64a4e9e77e7299078334019f",
      name: "Shell",
      description:
        "Palm kernel shell from Sungai Buloh.",
      price: 24.99,
    //   brand: "logitech",
      category: "Palm Kernel Shell",
      inStock: true,
      image:[{
        src:"/shell-image.png",
        alt:"Palm Kernel Shell",
      }],
      reviews: [],
    },

    {
      id: "649d775128b6744f0f497040",
      name: 'Fronds from Lumut',
      description:
        'Selling fronds for cheap price.',
      price: 14.99,
    //   brand: "Nerunsa",
      category: "Fronds",
      inStock: true,
      image:[{
        src:"/frond-image.jpg",
        alt:"Fronds",
      }],
      reviews: [],
    },
  ];