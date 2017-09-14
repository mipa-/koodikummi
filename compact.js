/*Lomilta back! Laitetaas heti maanantaihin pieni haaste jossa käytetään aikaisempien 
haasteiden isTruthy ja filter funktioita hyväksi. Nyt tarvitsisi saada compact funktio, 
joka poistaa kaikki falsy arvot arraysta ja palauttaa uuden arrayn jossa niitä ei ole.
Esimerkkiä voi taas ottaa lodashista, https://lodash.com/docs/4.17.4#compact

Huom. alkuperäinen data ei saa muuttua, bonushaasteena selvittää miten voidaan 
vertailla alkuperäistä ja uutta dataa ja varmistua siitä ettei alkuperäinen muutu. 
Bonushaasteeseen ei välttämättä tarvi kirjoittaa koodia, pohdiskelu ja sen kertominen riittää.


Esimerkkikäyttötapaus voisi olla:
.compact([0, 1, false, 2, '', 3]); // => [1, 2, 3]*/

function filterNonNative(list, callback) {
  var newList = [];
    for(i = 0; i < list.length; i++) {
      if(callback(list[i])) {
        newList.push(list[i]);
      }
    }
  return newList;
}

//test for filterNonNative function
//list.filter = null;

//filter function and two parameters
function filter(list, callback) {
  //test if native filter function exists
  if (typeof list.filter === "function") {
    return list.filter(callback);
  } 
  //if there is no native filter function, use non-native filter function
  return filterNonNative(list, callback);
}

function isTruthy(item) {
  return Boolean(item);
}

function compact(list) {
  var callback = isTruthy;
  return filter(list,callback);
}

var list2 = [0, 1, false, 2, '', 3];
var callback = isTruthy;

console.log("original list: " , list2)
console.log("compact list: " , compact(list2))

