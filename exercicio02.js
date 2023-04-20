let students = [
  {
    name: "Allyson",
    first_note: 8,
    second_note: 9,
  },

  {
    name: "Carlos",
    first_note: 6,
    second_note: 5,
  },

  {
    name: "Aline",
    first_note: 7,
    second_note: 8,
  },

  {
    name: "Leticia",
    first_note: 4,
    second_note: 7,
  },

  {
    name: "Pedro",
    first_note: 4,
    second_note: 7,
  },
]

function studentMedia(student) {
  if (((student.first_note + student.second_note) / 2) > 7) {
    return `
    A média do(a) aluno(a) ${student.name} é: ${(student.first_note + student.second_note) / 2}
    Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`
  } else {
    return `
    A média do(a) aluno(a) ${student.name} é: ${(student.first_note + student.second_note) / 2} 
    Não foi desta vez, ${student.name}! Tente novamente!`
  }
}

for (let student of students) {
  let message = studentMedia(student)
  alert(message)
}
