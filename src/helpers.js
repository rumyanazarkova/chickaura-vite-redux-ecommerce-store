export const formatPrice = (price) => {
   const newPrice = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
   }).format(price / 100)
   return newPrice
}

export const getUniqueValues = (data, type) => {
   let unique = data.map(product => product[type]);
   return [...new Set(unique.flat())]

}

export const getUniqueColors = (data) => {
   let colorsObj = {}
   data.map((product) => {
      const productColors = product.colors
      for (const color in productColors) {
         const colorName = color
         const colorKey = productColors[color];
         if (!colorsObj.hasOwnProperty(colorName)) {
            colorsObj[colorName] = colorKey
         }
      }
   })

   return colorsObj
}



