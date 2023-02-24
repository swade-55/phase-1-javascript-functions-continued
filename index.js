function saturdayFun(message='roller-skate') {
    return `This Saturday, I want to ${message}!`;
}

saturdayFun();
saturdayFun('bathe my dog');

function mondayWork(message=`go to the office`) {
    return `This Monday, I will ${message}.`;
}

mondayWork();
mondayWork(`work from home.`);

function wrapAdjective(special='*') {
    const part1 = 'You are';
    return function (phrase) {
        return (`${part1} ${special}${phrase}${special}!`);
        }
    }

wrapAdjective()('a hard worker');
wrapAdjective('||')('a dedicated programmer');