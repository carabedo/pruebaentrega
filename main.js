productos=[
    {
      "src": "https://jumboargentina.vteximg.com.br/arquivos/ids/682896/Jugo-Ades-Soja-Manzana-1-Lt-1-17840.jpg?v=637764969806700000",
      "name": "Ades Soja + Jugo De Manzana 1 L",
      "price": 239
    },
    {
      "src": "https://jumboargentina.vteximg.com.br/arquivos/ids/643143/Exquisita-Bizc-Chocolate-Ldg-12x450g-1-861744.jpg?v=637564728573800000",
      "name": "Exquisita Bizcochuelo Chocolate 450 Gr",
      "price": 519
    },
    {
      "src": "https://jumboargentina.vteximg.com.br/arquivos/ids/603275/Bizcochuelo-Exquisita-1-Min-Choc-X55g-1-853761.jpg?v=637358665317730000",
      "name": "Exquisita 1 Minuto De Chocolate X55 Gr",
      "price": 169
    },
    {
      "src": "https://jumboargentina.vteximg.com.br/arquivos/ids/650817/Chocolate-Loacker-Chocolate-Creme-87gr-1-863534.jpg?v=637595826966530000",
      "name": "Chocolate Loacker Chocolate Creme 87gr",
      "price": 692
    },
    {
      "src": "https://jumboargentina.vteximg.com.br/arquivos/ids/712985/Chocolate-Chocolate-Colonial-Negro-70cacao-100-1-892562.jpg?v=637947715242530000",
      "name": "Chocolate Chocolate Colonial Negro 70cacao 100",
      "price": 437.87
    }
  ]

console.log(productos.length)



contenedor=document.getElementsByClassName('contenedor')[0]


function menora300(x)
{
  return x.price<300
}

prod2s=productos.filter( x => x.price <300 )

for (const item of prod2s) {

    contenedor.innerHTML+='<article> <img src="'+item.src +'" width=200 height=200"><br>'+item.name +'</article>'
   
}


