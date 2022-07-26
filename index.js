// variable declare with 5 steps: 
// 1. variable declare with var  
// 2. variable meaningful name 
// 3. set the = sign 
// 4. variable value numeric, string or boolean 
// 5. use semicolon

// variable declare string type 
var name = 'Abdur Rahim Khandokar';

// numeric type variable 
var age = 25;

// boolean type variable 
var married = true;

// variable with camelCase 
var permanentAddress = 'Mirpur, Dhaka';
var office90 = 'street number';

// mathmatical opearation 
var mobilePrice = 5000;
var laptopPrice = 70000;
var watchPrice = 3000;
var availableMoney = 100000;
var mobile = 10;

var totalPrice = mobilePrice + laptopPrice + watchPrice;

var restMoney = availableMoney - totalPrice;

var totalMobilePrice = mobile * mobilePrice;

var totalMobile = availableMoney / mobilePrice;

// math short hand 
var bikePrice = 150000;
bikePrice = bikePrice + 50000;
bikePrice += 50000;
bikePrice++;

var carPrice = 1150000;
carPrice = carPrice - 50000;
carPrice -= 50000;
carPrice--;

var glassPrice = 1100;
glassPrice = glassPrice * 2;
glassPrice *= 2;

var fuelPrice = 200;
fuelPrice = fuelPrice / 2;
fuelPrice /= 2;

// conversion 
var bookPrice = '540.50';
var penPrice = '10.35';
var pencilPrice = 20;
var totalPrice = parseInt(bookPrice) + parseFloat(penPrice) + pencilPrice;

// modulus 
var bench = 35;
var student = 301;
var restStudent = student % bench;
