function getSolutions( a, b, c ){
    let D = b**2 - 4 * a * c;
      let x1 = 0, x2 = 0;
      let result = new Object;
    
    if ( D < 0 ) {
          result.D = D;
      } else if ( D === 0 ) {
          result.roots = -b / (2 * a);
          result.D = 0;
      } else if ( D > 0 ) {
          result.D = D;
          result.roots = [];
          result.roots[0] = ( -b + Math.sqrt(D) ) / 2 * a;
          result.roots[1] = ( -b - Math.sqrt(D) ) / 2 * a;
      }
      return result;
      console.log( result );
  }
  
  function showSolutionsMessage( a, b, c ){
    let result = getSolutions( a, b, c );
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
      console.log( 'Значение дискриминанта: ' + result.D );
  
    if ( result.D < 0 ) {
          console.log('Уравнение не имеет вещественных корней');
      } else if ( result.D === 0 ) {
          console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
      } else if ( result.D > 0 ) {
          console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
      }
  }
  
  showSolutionsMessage( 1, 2, 3 );
  showSolutionsMessage( 7, 20, -3 );
  showSolutionsMessage( 2, 4, 2 );
  
  
  
  function getAverageScore( data ) {
    let averageMarks = [];
  
    function averageOf( numbers ) {
          let sum = 0;
          for (let i = 0; i < numbers.length; i++) {
              sum += numbers[i];
          }
  
          return sum / numbers.length;
      }
    for ( let subject in data ) {
          let marks = data[ subject ];
  
          averageMark = averageOf( marks );
  
          data[ subject ] = averageMark;
  
          averageMarks.push( averageMark );
      }
  
      data.average = averageOf( averageMarks );
  
      return data;
  }
  
  console.log( getAverageScore( {
          algebra: [ 2, 4, 5, 2, 3, 4 ],
          geometry: [ 2, 4, 5 ],
          russian: [ 3, 3, 4, 5 ],
          physics: [ 5, 5 ],
          music: [ 2, 2, 6 ],
          english: [ 4, 4, 3 ],
          poetry: [5, 3, 4 ],
          chemistry: [ 2 ],
          french: [ 4, 4 ]
  } ) );