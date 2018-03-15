
const schoolToulouse = {
  city: 'Toulouse',
  curriculums: ['Java/Android', 'JS/React'],
  students: 28
}

const schoolParis = {
  city: 'Paris',
  curriculums: ['JS/React'],
  students: 51
}

const schoolBiarritz = {
  city: 'Biarritz',
  curriculums: ['Java/J2EE'],
  students: 8
}

const schoolBordeaux = {
  city: 'Bordeaux',
  curriculums: ['PHP/Symfony', 'JS/React'],
  students: 41
}

const schools = [
  schoolToulouse,
  schoolParis,
  schoolBiarritz,
  schoolBordeaux
]

console.log('>>>>>>>> Boucle extérieure avec for :');
for (let i = 0 ; i < schools.length ; i++) {
  const school = schools[i]
  for (let p in school) {
    const value = school[p]
    console.log(value)
  }
}


console.log('\n>>>>>>> Boucle extérieure avec for of:');
for (let school of schools) {
  for (let p in school) {
    const value = school[p]
    console.log(value)
  }
}