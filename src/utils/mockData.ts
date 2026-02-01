export const restaurantInfo = {
  name: "Malagueto - Cozinha Industrial",
  closeHour: 14,
  closeMinutes: 30,
  location: "Manaus - AM",
  logo: "https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2F2022%2F07%2F21%2F12%2FLogo-284290_335130_124812996_1572783973.jpg" 
};

export const cardapio = [
  // PROTEÍNAS - PEIXES
  {
    id: "p1",
    category: "proteinas",
    subcategory: "peixes",
    name: "Tambaqui só banda",
    desc: "Sem acompanhamentos. (serve bem 3 pessoas)",
    price: 55.00,
    image: "https://claudia.abril.com.br/wp-content/uploads/2020/02/receber-agosto12.jpg?quality=70&strip=info&resize=1080,565&crop=1"
  },
  {
    id: "p2",
    category: "proteinas",
    subcategory: "peixes",
    name: "Tambaqui ribeirinho",
    desc: "Banda de Tambaqui sem espinha assado na brasa",
    price: 70.00,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSmzw4ShSLR4xwLuCQ2mI5-ksE-8qSt95WgA&s"
  },
  {
    id: "p3",
    category: "proteinas",
    subcategory: "peixes",
    name: "Matrinxã Recheada",
    desc: "Recheada com farofa de banana da terra",
    price: 65.00,
    image: "https://media-cdn.tripadvisor.com/media/photo-s/06/28/31/eb/banzeiro.jpg"
  },
  {
    id: "p4",
    category: "proteinas",
    subcategory: "peixes",
    name: "Filé de Pirarucu",
    desc: "Filé de pirarucu grelhado ao molho de castanha",
    price: 85.00,
    image: "https://s2-receitas.glbimg.com/_CudZXkcy8YLqQV7JfT3OS1pAEk=/924x0/filters:format(jpeg)/https://i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2021/7/h/iA8BsNQpi2YSxRdyyVnw/rg.jpeg"
  },

  // PROTEÍNAS - CARNES VERMELHAS
  {
    id: "p5",
    category: "proteinas",
    subcategory: "carnes",
    name: "Picanha na Brasa",
    desc: "400g de picanha grelhada na brasa",
    price: 89.00,
    image: "https://culinariadolar.com.br/wp-content/uploads/2024/11/picanha-na-brasa.jpg"
  },
  {
    id: "p6",
    category: "proteinas",
    subcategory: "carnes",
    name: "Costela no Bafo",
    desc: "Costela bovina cozida lentamente",
    price: 75.00,
    image: "https://www.estadao.com.br/resizer/v2/GAJVXFRA55A43OAZGEAOGDZX6M.jpeg?quality=80&auth=e8ec261b2826a17579ec70ddf23e334e4d3f0113360e750eb78703e53b52abb3&width=1200&height=1200&focal=1339,2153"
  },
  {
    id: "p7",
    category: "proteinas",
    subcategory: "carnes",
    name: "Contra Filé",
    desc: "200g de contra filé grelhado",
    price: 58.00,
    image: "https://www.seara.com.br/wp-content/uploads/2025/09/receitascomcontrafilecapa.jpg"
  },
  {
    id: "p8",
    category: "proteinas",
    subcategory: "carnes",
    name: "Maminha Recheada",
    desc: "Recheada com bacon e queijo coalho",
    price: 82.00,
    image: "https://imagem.band.com.br/75/f_399375.jpg"
  },

  // PROTEÍNAS - AVES
  {
    id: "p9",
    category: "proteinas",
    subcategory: "aves",
    name: "Frango à Passarinho",
    desc: "Frango em pedaços temperado e frito",
    price: 48.00,
    image: "https://www.receiteria.com.br/wp-content/uploads/frango-a-passarinho-assado-00.jpg"
  },
  {
    id: "p10",
    category: "proteinas",
    subcategory: "aves",
    name: "Peito de Frango Grelhado",
    desc: "Grelhado com ervas finas",
    price: 42.00,
    image: "https://canaldareceita.com.br/wp-content/uploads/2025/07/File-de-Frango-Grelhado.webp"
  },
  {
    id: "p11",
    category: "proteinas",
    subcategory: "aves",
    name: "Coxa e Sobrecoxa Assada",
    desc: "Assadas com tempero caseiro",
    price: 45.00,
    image: "https://www.sabornamesa.com.br/media/k2/items/cache/e071acc32c7e4befc3022bf1715b6773_XL.jpg"
  },

  // PROTEÍNAS - SUÍNOS
  {
    id: "p12",
    category: "proteinas",
    subcategory: "suinos",
    name: "Lombinho Suíno",
    desc: "Lombinho grelhado com mel e mostarda",
    price: 52.00,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2PAlLWr8t5X0pWGNIKYkIod7EdAhbs_Kd1g&s"
  },
  {
    id: "p13",
    category: "proteinas",
    subcategory: "suinos",
    name: "Costelinha de Porco",
    desc: "Assada no forno com barbecue",
    price: 56.00,
    image: "https://s2-receitas.glbimg.com/xZ3JDnPhzVppHQgwx1QRYtupyOc=/0x0:3120x2080/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/M/f/HqZktqS9yQxI9wCSfFXg/costelinha-de-porco-ao-molho-barbecue.jpg"
  },

  // ACOMPANHAMENTOS - ARROZES
  {
    id: "a1",
    category: "acompanhamentos",
    subcategory: "arroz",
    name: "Arroz Branco",
    desc: "Arroz soltinho temperado",
    price: 8.00,
    image: "https://static.itdg.com.br/images/360-240/21fd76be3b29c3290859eda5220e0e32/323683-original.jpg"
  },
  {
    id: "a2",
    category: "acompanhamentos",
    subcategory: "arroz",
    name: "Arroz à Piamontese",
    desc: "Arroz cremoso com queijo parmesão",
    price: 12.00,
    image: "https://s2-receitas.glbimg.com/GHIzjo0ytFat-YenAkeu8z7XW0Y=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/T/v/SCRij3TS2bYO5oGKS10A/arroz-a-piamontese-receita.jpg"
  },
  {
    id: "a3",
    category: "acompanhamentos",
    subcategory: "arroz",
    name: "Arroz Integral",
    desc: "Arroz integral orgânico",
    price: 10.00,
    image: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/7F99AEE8-50AA-4CAA-A340-81E4891F912F/Derivates/3de10392-9a13-48e5-9098-af5149c40c0a.jpg"
  },

  // ACOMPANHAMENTOS - FEIJÕES
  {
    id: "a4",
    category: "acompanhamentos",
    subcategory: "feijao",
    name: "Feijão Preto",
    desc: "Feijão preto temperado",
    price: 8.00,
    image: "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/4026a5474846b4097e4f3ab477b27570.jpg"
  },
  {
    id: "a5",
    category: "acompanhamentos",
    subcategory: "feijao",
    name: "Feijão Carioca",
    desc: "Feijão carioca com caldo",
    price: 8.00,
    image: "https://images.aws.nestle.recipes/original/f75bc2f54a898d046a59b35087587595_feijao-carioca_1.jpg"
  },
  {
    id: "a6",
    category: "acompanhamentos",
    subcategory: "feijao",
    name: "Feijão Tropeiro",
    desc: "Feijão com farinha, linguiça e ovos",
    price: 15.00,
    image: "https://compactaprint.com.br/wp-content/uploads/2025/09/Receita-de-Feijao-Tropeiro-O-Prato-Tradicional-Mineiro.jpg"
  },

  // ACOMPANHAMENTOS - FAROFAS
  {
    id: "a7",
    category: "acompanhamentos",
    subcategory: "farofa",
    name: "Farofa de Banana",
    desc: "Farofa crocante com banana da terra",
    price: 10.00,
    image: "https://sabores-new.s3.amazonaws.com/public/2024/11/farofa-de-banana-da-terra.jpg"
  },
  {
    id: "a8",
    category: "acompanhamentos",
    subcategory: "farofa",
    name: "Farofa de Bacon",
    desc: "Farofa com bacon crocante",
    price: 12.00,
    image: "https://www.estadao.com.br/resizer/7G9PwM2K6Hx1aiB9fiCIwxhQcaw=/arc-anglerfish-arc2-prod-estadao/public/2ESAGWYIZNDRDEB5JY6JKR3OCE.jpg"
  },
  {
    id: "a9",
    category: "acompanhamentos",
    subcategory: "farofa",
    name: "Farofa Simples",
    desc: "Farofa de manteiga com cebola",
    price: 7.00,
    image: "https://i.ytimg.com/vi/lThBQMCYpzk/maxresdefault.jpg"
  },

  // SALADAS
  {
    id: "s1",
    category: "saladas",
    subcategory: "folhas",
    name: "Salada Verde",
    desc: "Alface, rúcula e tomate cereja",
    price: 12.00,
    image: "https://comercialzaffari.com.br/wp-content/uploads/2023/10/salada-tropical-scaled.jpg"
  },
  {
    id: "s2",
    category: "saladas",
    subcategory: "folhas",
    name: "Salada Caesar",
    desc: "Alface, croutons, parmesão e molho caesar",
    price: 18.00,
    image: "https://receitadaboa.com.br/wp-content/uploads/2024/04/bottom_view_caesar_salad_oval_plate_dark_red_table-23000869-1.jpg"
  },
  {
    id: "s3",
    category: "saladas",
    subcategory: "legumes",
    name: "Salada de Legumes",
    desc: "Cenoura, beterraba e pepino ralados",
    price: 14.00,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfKQCBrlYyUIH28LqJvA77Z5uBJsZQfnH_vA&s"
  },
  {
    id: "s4",
    category: "saladas",
    subcategory: "mistas",
    name: "Vinagrete",
    desc: "Tomate, cebola e pimentão picados",
    price: 9.00,
    image: "https://i.ytimg.com/vi/q9w0FkFsQg4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAkKXDyK9SeOGzz66Sbcg4rtnZY1A"
  },

  // MASSAS
  {
    id: "m1",
    category: "massas",
    subcategory: "italianas",
    name: "Espaguete ao Molho Pomodoro",
    desc: "Massa fresca com molho de tomate natural",
    price: 28.00,
    image: "https://www.giallozafferano.com.br/images/4-485/Espaguete-ao-molho-de-tomate_1200x800.jpg"
  },
  {
    id: "m2",
    category: "massas",
    subcategory: "italianas",
    name: "Fettuccine ao Molho Branco",
    desc: "Fettuccine com molho branco e parmesão",
    price: 32.00,
    image: "https://i.ytimg.com/vi/KrtE80gdnqg/sddefault.jpg"
  },
  {
    id: "m3",
    category: "massas",
    subcategory: "brasileiras",
    name: "Macarrão à Carbonara",
    desc: "Com bacon, ovos e queijo parmesão",
    price: 35.00,
    image: "https://todeschinialimentos.com.br/images/receitas/2/todeschini-imagem-receitas-macarrao-carbonara-share.jpg"
  },
  {
    id: "m4",
    category: "massas",
    subcategory: "brasileiras",
    name: "Talharim à Bolonhesa",
    desc: "Com molho de carne moída",
    price: 30.00,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAWDeS86i7gooUabNh6Lvj3m8su35cZgfFZg&s"
  },

  // MOLHOS EXTRAS
  {
    id: "e1",
    category: "extras",
    subcategory: "molhos",
    name: "Molho à Campanha",
    desc: "Molho de pimenta e limão",
    price: 5.00,
    image: "https://s2-receitas.glbimg.com/jseQ0ChLa7SLjeTfsid6iLcRTt8=/600x0/filters:quality(50)/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2024/2/D/bgAoeLR5uoRfq0alrzfA/molho-a-campanha.jpg"
  },
  {
    id: "e2",
    category: "extras",
    subcategory: "molhos",
    name: "Molho Barbecue",
    desc: "Molho barbecue caseiro",
    price: 5.00,
    image: "https://i.panelinha.com.br/i1/bk-6268-molho-barbecue.webp"
  },
  {
    id: "e3",
    category: "extras",
    subcategory: "molhos",
    name: "Molho de Alho",
    desc: "Cremoso e saboroso",
    price: 5.00,
    image: "https://imagem.band.com.br/17/f_364617.jpg"
  }
];

export const initialCart = {
  items: [{ id: "1", name: "Tambaqui só banda", quantity: 1, price: 55.00 }],
  subtotal: 55.00,
  taxa: "A definir"
};

