// Create competitors as objects inside an array
const competitors = [
  {
    name: "Sana",
    books: ["Harry Potter", "The Hobbit", "Atomic Habits"],
    totalPages: [500, 300, 250],
    pagesRead: [200, 150, 100]
  },
  {
    name: "Athar",
    books: ["1984", "Rich Dad Poor Dad", "Deep Work"],
    totalPages: [328, 336, 280],
    pagesRead: [200, 300, 180]
  },
  {
    name: "Naveen",
    books: ["The Alchemist", "Think and Grow Rich", "Man’s Search for Meaning"],
    totalPages: [208, 238, 180],
    pagesRead: [208, 220, 180]
  },
  {
    name: "Zahra",
    books: ["Start with Why", "Educated", "The Power of Habit"],
    totalPages: [498, 352, 371],
    pagesRead: [200, 180, 50]
  }
];

competitors.forEach(comp => {
  console.log(`Hello! I am ${comp.name}.`);
  console.log(`I am reading ${comp.books.length} books: ${comp.books.join(", ")}`);
  console.log(`------------------------------`);
});
 console.log(`*****************************************`);
function calculateProgress(pagesRead, totalPages) {
  let totalPagesRead = pagesRead.reduce((acc, pages) => acc + pages, 0);
  let totalPagesToRead = totalPages.reduce((acc, pages) => acc + pages, 0);
  let progress = (totalPagesRead / totalPagesToRead) * 100;
  return progress.toFixed(2);
}
console.log(`Progress of each competitor:`);
competitors.forEach(comp => {
  let progress = calculateProgress(comp.pagesRead, comp.totalPages);
  console.log(`${comp.name} has read ${progress}% of their books.`);
});

 console.log(`*****************************************`);

function calculateTotalPagesRead(pagesReadArray) {
  return pagesReadArray.reduce((total, pages) => total + pages, 0);
}
console.log(`Total pages read by each competitor:`);
competitors.forEach(comp => {
  let totalPagesRead = calculateTotalPagesRead(comp.pagesRead);
  console.log(`${comp.name} has read a total of ${totalPagesRead} pages.`);
});

 console.log(`*****************************************`);


function calculateCompletionRate(pagesReadArray, totalPagesArray) {
  let totalPagesRead = calculateTotalPagesRead(pagesReadArray);
  let totalPagesToRead = calculateTotalPagesRead(totalPagesArray);
  return ((totalPagesRead / totalPagesToRead) * 100).toFixed(2);
}
console.log(`Completion rate of each competitor:`);
competitors.forEach(comp => {
  let completionRate = calculateCompletionRate(comp.pagesRead, comp.totalPages);
  console.log(`${comp.name} has a completion rate of ${completionRate}%.`);
});

 console.log(`*****************************************`);

function awardPoints(totalPages, completionRate) {
  let points = 0;
  if (totalPages >=800 && completionRate > 50) {
    points += 10;
  } else if (totalPages >= 500 && completionRate > 60) {
    points += 5;
  } else {
    points += 2;
  }
  return points;
}
console.log(`Points awarded to each competitor:`);
competitors.forEach(comp => {
  let totalPages = calculateTotalPagesRead(comp.totalPages);  
  let completionRate = calculateCompletionRate(comp.pagesRead, comp.totalPages);
  let points = awardPoints(totalPages, completionRate);
  console.log(`${comp.name} has been awarded ${points} points.`);

});

console.log(`*****************************************`);

competitors.forEach(comp => {
  let totalPages = calculateTotalPagesRead(comp.totalPages);
  let completionRate = calculateCompletionRate(comp.pagesRead, comp.totalPages);
  comp.points = awardPoints(totalPages, completionRate);
});

let winner = competitors.reduce((prev, current) => 
  (prev.points > current.points) ? prev : current
);

console.log(`The winner is ${winner.name} with ${winner.points} points!`);

