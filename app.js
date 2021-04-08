function timeConvert(min) { 
let hours = 0
let minutes = 0 
hours = Math.floor(min/60)
minutes = min%60
let time = hours +':'+ minutes
return time
}