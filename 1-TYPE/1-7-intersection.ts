{
  // Intersection Types : &

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function interWorker(person: Student & Worker) {
    console.log(person.name, person.score, person.employeeId, person.work());
  }

  interWorker({
    name: 'movi',
    score: 100,
    employeeId: 1234,
    work: () => console.log('work'),
  });
}
