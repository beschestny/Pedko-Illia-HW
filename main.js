let qwe = 1;
console.log(qwe);
var variable = '1231';
console.log(variable);

const bool = false;
console.log(bool);

let unundead = undefined;

console.log(unundead);

var variable = '3333'
console.log(variable);

let str = '123'
console.log(str);

let num123 = +str
console.log(num123)

let number132 = parseInt(str)
console.log(number132)

let num = 100;
console.log(num);
let num1 = String(num);
console.log(num1);
// ============================== 4 ЗАДАНИЕ =-============

let number4 = 100;
let num5 = '50';
console.log(num5 + number4);

let num6 = 200 ;
console.log(num6 + number4);
let num7 = true
console.log(num7 + number4);
let num8 = undefined ;
console.log(num8 + number4);
let num9 = 'Hello'
console.log(num9 + number4);
console.log(num7 + num9);
console.log(num9 + num8);
console.log(num9 - number4);
console.log(num7 - num9);
console.log(num9 - num8);
console.log(num8 - number4);
console.log(num7 - number4);
console.log(num6 - number4);
console.log(num5 - number4);

// =================================== NEXT TASKS=========================

// let login = prompt("Enter your name");
// let password = prompt("Enter your password");
// if (login === "kykold" && password === '1234asdQQ')
//     console.log('Welcome');
// else
//     console.log('Not correct');
// ==============================Task 7=====================================================

// let age = prompt("Enter your age");
//
//
// if (age >= 16)
//     console.log('Welcome');
//
// else if (age < 16)
//     console.log('You are not ready');

// ====================================== Task8======================================

// let experience = prompt("Enter your experience in our company");
// if (experience <= 2)
//     console.log('You will not have more money')
// else if (experience > 2 && experience <= 7)
//     console.log('You will + 10% for salary ')
//  else if (experience >= 8)
//     console.log('You will + 20% for salary')

// ======================================== Task 9========================================

let daynumber = +prompt("Please enter day number");

//  if (daynumber === 1)
//      console.log('Monday')
// else if (daynumber === 2)
//     console.log('Tuesday')
// else if (daynumber === 3)
//     console.log('Wednesday')
// else if (daynumber === 4)
//     console.log('Thursday')
// else if (daynumber === 5)
//     console.log('Friday')
// else if (daynumber === 6)
//     console.log('Saturday')
// else if (daynumber === 7)
//     console.log('Sunday')
// else
//     console.log('Are you okay?')

switch (daynumber) {
    case 1:
        console.log('Monday');
        break;
        case 2:
            console.log('Tuesday');
            break;
            case 3:
                console.log('Wednesday');
                break;
                case 4:
                    console.log('Thursday');
                    break;
                    case 5:
                        console.log('Friday');
                        break;
                        case 6:
                            console.log('Saturday');
                            break;
                            case 7:
                                console.log('Sunday');
                                break;
                                default:
                                    console.log(' You are Invalid ');
                                    break;
}


