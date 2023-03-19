// Code your solution in this file!
const distanceFromHqInBlocks = value => Math.abs(value - 42)
const distanceFromHqInFeet = value => 264 * distanceFromHqInBlocks(value)
const distanceTravelledInFeet = (start,end) => Math.abs((end - start)) * 264

const calculatesFarePrice = (end,start) => {
    const value = distanceTravelledInFeet(end,start)
    if (value < 400) {
        return 0;
     } else if (value > 400 && value < 2000){
        return (value - 400)*.02
     } else if (value > 2000 && value < 2500){
        return 25
     }else {
        return 'cannot travel that far'
     }
}