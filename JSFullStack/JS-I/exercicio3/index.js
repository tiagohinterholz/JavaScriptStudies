let measureM = parseFloat(prompt("Insira uma medida em metros (m):"))
let choiceMeasure = prompt("Para qual unidade de medida deseja converter?" +
    "\n1 - milímetros (mm)" +
    "\n2 - centímetros (cm)" +
    "\n3 - decímetros (dm)" +
    "\n4 - decâmetros (dam)" +
    "\n5 - hectômetro (hm)" +
    "\n6 - quilômetro (km)"
  )

switch (choiceMeasure) {
    case 'mm':
        alert(`A medida ${measureM} metros equivale à ${measureM * 1000} milímetros.`)
        break
    case 'cm':
        alert(`A medida ${measureM} metros equivale à ${measureM * 100} centímetros.`)
        break
    case 'dm':
        alert(`A medida ${measureM} metros equivale à ${measureM * 10} decímetros.`)
        break
    case 'dam':
        alert(`A medida ${measureM} metros equivale à ${measureM / 10} decâmetros.`)
        break
    case 'hm':
        alert(`A medida ${measureM} metros equivale à ${measureM / 100} hectômetros.`)
        break
    case 'km':
        alert(`A medida ${measureM} metros equivale à ${measureM / 1000} quilômetros.`)
        break
    default:
        alert('Entrada inválida.')
}