const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const shuffleArray = array => {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
};

console.log(shuffleArray(array));

// # echo "# ArrayToDo1" >> README.md
// # git init
// # git add README.md
// # git commit -m "first commit"
// # git branch -M main
// # git remote add origin https://github.com/jcambray10/ArrayToDo1.git
// # git push -u origin main