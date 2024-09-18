//from 115 to a22

// let myNumbers = [1, 2, 3, 4, 5];

// let([a, , , ,e]=myNumbers);
// console.log(a * e); 

// let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];
// let[a,b,c,[d,e,[f,g]]]=mySkills;
// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);


// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];
// let arr=[arr3[1],arr1[0],arr2[0]];
// let [a,b,c]=arr
// console.log(arr);
// console.log(`My Best Friends: ${a}, ${b}, ${c}`);


// const member = {
//     age: 30,
//     working: false,
//     country: "Egypt",
//     hobbies: ["Reading", "Swimming", "Programming"],
//   };
//  const {age:a , working:w , country:c , hobbies:[h1,, h3]}=member;
  
//   console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
  
//   console.log(`I Live in ${c}`);
  
//   console.log(`My Hobbies: ${h1} And ${h3}`);


// const game = {
//     title: "YS",
//     developer: "Falcom",
//     releases: {
//       "Oath In Felghana": ["USA", "Japan"],
//       "Ark Of Napishtim": {
//       US: "20 USD",
//       JAP: "10 USD",
//       },
//       Origin: "30 USD",
//     },
//   };

// ({title:t ,developer:d,releases}=game);
  
// const [o,a]=Object.keys(releases);
// const [[u,j],{US:u_price,JAP:j_price},or]=Object.values(releases)

// console.log(`My Favourite Games Style Is ${t} Style`);
// console.log(`And I Love ${d} Games`);
// console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// console.log(`Although I Love ${a}`);
// console.log(`${a} Price in USA Is ${u_price}`);
// console.log(`${a} Price in Japan Is ${j_price}`);
// console.log(`Origin Price Is ${or}`);



// challenge and ass6
// let chosen =2;
// let myfriends=
// [
//     {title:"asmaa",age:15,availble:true,skills:["HTML","CSS"]},
//     {title:"ahmed",age:20,availble:false,skills:["python","django"]},
//     {title:"hamed",age:25,availble:false,skills:["php","laravel"]},

// ];
// let title ,age, availble, skills ;
// if(chosen==1)
// {
//      ({title:t,age:a,availble:av,skills:[,B]}=myfriends[0]);
// }
// else if(chosen==2)
// {
//      ({title:t,age:a,availble:av,skills:[,B]}=myfriends[1]);
// }
// else if(chosen==3)
// {
//      ({title:t,age:a,availble:av,skills:[,B]}=myfriends[2]);
// }
// console.log(t);
// console.log(a);
// console.log(av);
// console.log(B);
//--------------------------------------------------------------
//from 123 to 133

// let arr=new Set([10]);
// arr.add(20).add(arr.size);
// console.log(arr);
// console.log(Array.from(arr)[arr.size-1]);



// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// let arr=new Set(myFriends.sort());
// console.log(arr);



// let myInfo = {
//     username: "Osama",
//     role: "Admin",
//     country: "Egypt",
// };
// let ma=new Map();
// for(let i=0;i<Object.keys(myInfo).length;i++)
// {
//    ma.set(Object.keys(myInfo)[i],Object.values(myInfo)[i]);
// }
// console.log(ma);
// console.log(ma.size);
// console.log(ma.has("role"));


// let theNumber = 100020003000;
// let res=new Set(Array.from(theNumber.toString()));
// res.delete("0");
// console.log(Array.from(res).join(""));


// let theName = "Elzero";
// console.log(Array.from(new Set(theName)));
// console.log(Array.from(theName));
// console.log(theName.split(""));
// console.log([...theName]);
// let res=Object.assign([],theName);
// console.log(res);



// let letter,num=0;
// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// console.log(chars);

// for(let i=0;i<chars.length;i++)
// {
//     if(typeof chars[i] === 'number')
//     {
//         letter=chars[i];
//         chars.splice(i,1);
//         chars.unshift(letter); 
//         ++num;
//     }
// }
// chars.copyWithin(0,num,(num+num));
// console.log(chars);





// let numsOne = [1, 2, 3];
// let numsTwo = [4, 5, 6];
// console.log([...numsOne,...numsTwo]);
// let res=numsOne.concat(numsTwo);
// console.log(res);
// let rest=new Set([...numsOne,...numsTwo]);
// console.log(Array.from(rest))


// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];
// console.log(Math.max(...n1)*[...n1,...n2].length )
//---------------------------------------------------------------------------
//from 134to 146

// let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
// let regex=/\d+:\w{2}\d(:\d{4}){6}/ig;
// console.log(ip.match(regex));

// let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
// let regex=/Os\d*O/ig;
// console.log(specialNames.match(regex));


// let phone = "+(995)-123 (4567)";
// let regex=/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/ig;
// console.log(phone.match(regex));



// let date1 = "25/10/1982";
// let date2 = "25 - 10 - 1982";
// let date3 = "25 10 1982";
// let date4 = "25 10 82";
// let re = /25(\/|\s)-?\s?10(\/|\s)\s?-?\s?(1982|82)/ig;
// console.log(date1.match(re)); // "25/10/1982"
// console.log(date2.match(re)); // "25 - 10 - 1982"
// console.log(date3.match(re)); // "25 10 1982"
// console.log(date4.match(re)); // "25 10 82"


// let url1 = 'elzero.org';
// let url2 = 'http://elzero.org';
// let url3 = 'https://elzero.org';
// let url4 = 'https://www.elzero.org';
// let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';
// let re = /(https?:\/\/(www.)?)?elzero.org(:\d{4}\/articles.php\?id=\d{3}&cat=topics)?/ig;
// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));
