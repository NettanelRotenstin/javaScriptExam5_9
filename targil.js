// צור פונקציה בשם filterAndSortEvenNumbers.
// הפונקציה תקבל מערך של מספרים בתור פרמטר.
// סנן את המספרים כך שרק המספרים הזוגיים יישארו.
// מיין את המספרים הזוגיים בסדר עולה.
// החזר את המערך המסונן והממוין.


function FilterAndSortEvenNumbers(arr) {
    evenArr = arr.filter(x => x % 2 == 0)
    return evenArr.sort()
    
}


// צור פונקציה בשם removeDuplicates.הפונקציה תקבל מערך של מספרים בתור פרמטר.הפונקציה תסיר את כל המספרים הכפולים ותשמור רק מספרים ייחודיים.החזר מערך חדש שבו כל מספר מופיע רק פעם אחת, בסדר שבו הוא הופיע לראשונה.


function RemoveDuplicates(arr)
{
    newArr = [...new Set(arr)]
    return newArr
}


// צור פונקציה בשם capitalizeFirstLetter.הפונקציה תקבל מחרוזת בתור פרמטר.הפונקציה תעבור על כל מילה במחרוזת.אם מילה אינה מסתיימת בנקודה, הפונקציה תשנה את האות הראשונה שלה לאות גדולה.החזר את המחרוזת המעודכנת.
function  capitalizeFirstLetter(str)
{
    newStr =  str.split(" ")
    for(let i = 0; i < newStr.length;i++)
    {
        if(newStr[i][newStr[i].length -1] != ".")
        {
            newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1);
        }
    }
    newStr.join()
    return newStr
    
}

function loadTasks()
{
    const tasksArr = JSON.parse(localStorage.getItem("tasks"))
}

function addTask(obj)
{
    const tasksArr = JSON.parse(localStorage.getItem("tasks"))
    tasksArr.push(obj)
    localStorage.setItem("tasks",JSON.stringify(tasksArr))
}

function removeTask(obj)
{
    const tasksArr = JSON.parse(localStorage.getItem("tasks"))
    const newArr = tasksArr.filter(x => x.id != obj.id)
    localStorage.setItem(`tasks`,JSON.stringify(newArr))
} 