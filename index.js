// Assignment 3: Library Book Tracker
// 1. Array of book objects
const books = [
  { title: "Jannat k pattay", author: "Nemrah Ahmed", isAvailable: true,  dueDate: "2025-10-01" },
  { title: "Peer-e-kamil",            author: "Umera Ahmed",       isAvailable: false, dueDate: "2025-09-10" },
  { title: "Ankaboot", author: "Noor Rajput",    isAvailable: false, dueDate: "2025-09-30" },
  { title: "Bismil",   author: "Mehrunisa Sahhmeer",   isAvailable: true,  dueDate: "2025-12-01" }
];

// 2. Counters for availability
let availableCount = 0;
let checkedOutCount = 0;

// Arrays to track overdue books
const overdueBooks = [];

// Current date (today) to compare due dates
const today = new Date(); // current system date

// 3. Loop through books
for (const book of books) {
  // Count availability
  if (book.isAvailable) {
    availableCount++;
  } else {
    checkedOutCount++;

    // 4. Check overdue status
    const due = new Date(book.dueDate);
    if (due < today) {
      overdueBooks.push(book.title);
    }
  }
}

// 5. Display summary
console.log(`Total books: ${books.length}`);
console.log(`Available books: ${availableCount}`);
console.log(`Checked-out books: ${checkedOutCount}`);

if (overdueBooks.length > 0) {
  console.log("Overdue books:");
  for (const title of overdueBooks) {
    console.log(" - " + title);
  }
} else {
  console.log("No overdue books today.");
}
console.log(books);


