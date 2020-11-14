// დაწერეთ ფუნქცია, რომელიც ღებულობს რიცხვების მასივს და აბრუნებს დადებითი რიცხვების საშუალო მნიშვნელობას.
// (მაგალითად თუ გადაეცემა მასივი [-1, 2, 4] უნდა დააბრუნოს 3: (4 + 2) / 2)
// function getPositiveNumbersAverage(numbersArray){ }

let MynumbersArray = [-1, -3, 4, 6, 5];

function getPositiveNumbersAverage(numbersArray)
{
    let sum=0;
    let count=0;
    let result;
    for (let i=0; i<numbersArray.length; i++)
    {
        if (numbersArray[i]>0)
        {
            sum = sum + numbersArray[i];
            count++;
        }
    }
    result = sum / count;
    return result;
}

let answer = getPositiveNumbersAverage(MynumbersArray);
alert (answer);